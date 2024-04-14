/* eslint-disable import/no-anonymous-default-export */
import { rqx } from "@src/api";
import { accessNestedData, getMainPathAPI } from "@src/utils/Api.helper";

class GeneralServices {
  constructor() {
    this.param = {
      'populate[0]': 'header.menu',
      'populate[1]': 'header.button',
    };
  }

  //@DESC: General Functions
  async getMainHandler(path, params, type = "get") {
    let resFinal = {
      data: {},
      ok: false
    };

    try {
      const res = await rqx[type](path, params);
      resFinal.data = res?.data
      resFinal.ok = true;
    } catch (err) {
      console.error({ 'main_api_handler:': err });
      resFinal.data = err?.data?.error || err;
    }
    return resFinal;
  }

  async getMiddlewareHandler(path, params, type = "get") {
    let resFinal = {
      data: {},
      ok: false,
    };

    try {
      const middlewareRes = await fetch("/api/general", {
        method: "POST",
        body: JSON.stringify({
          path,
          params,
          type,
        }),
      });
      const res = await middlewareRes.json();
      resFinal.data = res?.axiosRes;
      resFinal.ok = res?.ok;
    } catch (error) {
      resFinal.data = error?.data?.error || error;
    }

    return resFinal;
  }

  getItemImages(img_items, isArr = true) {
    const finalData = isArr ? [] : {};
    if (img_items?.length) {
      img_items.forEach((item) => {
        const { name, key, image, link, title, description } = item;
        const newItem = {
          key,
          title: !!title ? title : "",
          description: !!description ? description : "",
          name,
          src: image?.data?.attributes?.url || "",
          link
        }
        isArr ? finalData.push(newItem) : finalData[key] = newItem;
      });
    }
    return finalData;
  }

  getImageDetails(details) {
    let myImg = {
      alt: "",
      src: ""
    }
    if (!!details?.data?.attributes) {
      const { url } = details?.data?.attributes;
      myImg.alt = `Image: ${url}`;
      myImg.src = url;
    }
    return myImg;
  }

  //@DESC: Get Layout Datas
  getAppLayout() {
    return { label: "sample response" }
  }

}
export default new GeneralServices();
