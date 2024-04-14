/* eslint-disable import/no-anonymous-default-export */
import { getAPIType, getMainPathAPI } from "@src/utils/Api.helper";
import { GeneralServices } from "@src/services";

class PageServices {
  constructor() {
    this.params = {};
  }

  getParam(slug = "home") {
    const type = getAPIType();
    return {
      "filters[app][$eq][0]": `${type?.collection}`,
      "filters[slug][$eq][1]": `${slug}`,
      "populate[0]": "section.image",
      "populate[1]": "section.image_items",
      "populate[2]": "section.image_items.image",
    };
  }

  async getPage(slug) {
    const { getMainHandler } = GeneralServices;
    return await getMainHandler(getMainPathAPI("pages"), this.getParam(slug));
  }

  getActiveSection(list, key) {
    let included = false;
    if (!list.length) return included;
    included = list.includes(key);
    return included;
  }

  async getPageMeta(slug = "/teams") {
    let label = "NA";
    let pageTitle = "EKINGS Euro 2024"
    let metaTags = [];
    const { hasErrorResponse } = GeneralServices;
    const { data, message } = await this.getPage(slug);
    if (hasErrorResponse(message)) return label;
    try {
      const main = data?.data[0]?.attributes;
      label = main?.section[0]?.title;
      metaTags = main?.meta_tags;
      pageTitle = main?.name;
    } catch (error) {
      console.error(`get_app_page_${page}:`, error);
    }
    return { label, metaTags, pageTitle };
  }

  //@DESC: Home API starts here...
  async getAppPageHome(sections = []) {
    let resFinal = {
      carouselItems: [],
      quickNavMenu: [],
      extraBanner: {},
      highlightsURL: "",
      popupAds: {},
      promotions: [],
      newsLabels: {
        latest: "Latest News",
        featured: "Featured News",
      },
      parentLabels: {},
    };

    const { getItemImages, hasErrorResponse } = GeneralServices;
    const { data, message } = await this.getPage("/");
    if (hasErrorResponse(message)) return resFinal;

    try {
      const main = data?.data[0]?.attributes?.section;
      main.forEach((itemData) => {
        const { key, image, link, title } = itemData;
        if (this.getActiveSection(sections, key)) {
          resFinal.parentLabels[key] = title;
          switch (key) {
            case "carousel":
            case "quicknav":
            case "popupads":
            case "promotions":
              const nameOpt = {
                carousel: "carouselItems",
                quicknav: "quickNavMenu",
                popupads: "popupAds",
                promotions: "promotions",
              };
              resFinal[nameOpt[key]] = getItemImages(itemData?.image_items, key !== "popupads");
              break;
            case "extrabanner":
              resFinal.extraBanner = {
                src: image?.data?.attributes?.url || "",
                alt: "Banner Image",
                link,
              };
              break;
            case "eurohighlights":
              resFinal.highlightsURL = link || "";
              break;
            case "newslabel":
              if (itemData?.image_items?.length) {
                itemData?.image_items?.forEach((i) => {
                  resFinal.newsLabels[i.key] = i.title;
                });
              }
              break;
          }
        }
      });
    } catch (error) {
      console.error("get_app_page_home:", error);
    }
    return resFinal;
  }

  //@DESK: Prediction API starts here...
  async getAppPagePrediction() {
    let imgProps = {
      src: "",
      alt: "",
    };
    let resFinal = {
      bannerbackground: imgProps,
      bannerhero: imgProps,
      textsContents: {},
      teams: [],
    };

    const { getImageDetails, getItemImages, hasErrorResponse } = GeneralServices;
    const { data, message } = await this.getPage("/prediction");
    if (hasErrorResponse(message)) return resFinal;

    try {
      const main = data?.data[0]?.attributes?.section;
      main.forEach((itemData) => {
        const { key, image, description } = itemData;
        resFinal[key] = getImageDetails(image);
        if (key === "textcontent") resFinal.textsContents = this.getPredictionTextsDetails(description);
        if (key === "textcontent") resFinal.teams = getItemImages(itemData?.image_items, true);
      });
    } catch (error) {
      console.error("get_app_page_prediction:", error);
    }
    return resFinal;
  }

  getPredictionTextsDetails(data) {
    const finalData = {
      title: "Join us and guess the world cup results!",
      inputLabel: "EKINGS Username",
      buttonLabel: "Submit",
      signupLabelA: "Not a member?",
      signupLabelB: "Register Here",
      signupLabelC: "Terms and Conditions",
    };
    try {
      data.split("/n").forEach((i) => {
        const key = i.split(":")[0].replace(/(\r\n|\n|\r)/gm, "");
        const value = i.split(":")[1];
        if (finalData[key]) finalData[key] = value;
      });
    } catch (error) {
      console.error("get_app_page_prediction_textdetails:", error);
    }
    return finalData;
  }

  async sendOffBet(formData, teams) {
    const type = getAPIType();
    let reqParam = {
      //@DESC: fields required
      username: formData?.username?.value,
      home: "",
      home_score: 0,
      away: "",
      away_score: 0,
      app: type?.collection,
      //@DESC: fields optional
      status: "",
      rollover: "",
      free_credit: "",
      valid_bet_requirements: "",
      is_eligible: true,
    };
    teams.forEach((team) => {
      const data = formData[team?.key];
      reqParam[team?.key] = parseInt(data?.value);
      reqParam[team?.key === "home_score" ? "home" : "away"] = team?.title;
    });
    const { getMiddlewareHandler } = GeneralServices;
    const res = await getMiddlewareHandler(getMainPathAPI("predictions"), reqParam, "post");
    return res?.message === "success";
  }
}
export default new PageServices();
