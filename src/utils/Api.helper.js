export const getMainPathAPI = (key = 'euro-thailand') => {
  let url = `/api/${key}`;
  return url;
};

export const accessNestedData = (data, keys) => {
  return keys.reduce((result, key) => {
    const lastItem = keys[keys.length - 1];
    const resultFinal = lastItem === key && keys.length ? result[key] : result[key].data.attributes;
    return result || !!resultFinal ? resultFinal : undefined;
  }, data);
};

export const groupDataBySameKeyVal = (arr, key) => {
  const _ = require("lodash");
  let finalData = {};
  try {
    _.mapValues(
      finalData = _.groupBy(arr, key),
      (listArr) => listArr.map((categ) => _.omit(categ, key))
    );
  } catch (error) {
  }
  return finalData
};

export const getDomainNameOnGlobalSettings = (global) => {
  let domName = "ekingseuro2024";

  const isValidObject = (param) => {
    return typeof param === 'object' && param !== null && !Array.isArray(param);
  }

  try {
    const initName = Object.values(global["__incrementalCache"]).filter((i) => isValidObject(i)).filter((i) => !!i?.host)[0];
    domName = `${initName?.host}`.split(".")[0];
  } catch (error) {
    console.error("ERROR_GET_GLOBAL_DOMAIN_NAME", error);
  }

  return domName;
}

export const getAPIType = () => {
  let domName = "ekingseuro2024"
  try {
    domName = `${window.location.hostname}`.split(".")[0];
  } catch (error) {
    if (typeof global) domName = getDomainNameOnGlobalSettings(global);
  }
  const currDomains = [
    {
      domain: "ekingseuro2024",
      collection: "th",
      single: "euro-thailand",
    },
    {
      domain: "euro2024prediksi",
      collection: "id",
      single: "euro-indonesia",
    },
  ];

  return currDomains.filter((i) => i.domain === domName)[0] || {
    domain: "ekingseuro2024",
    collection: "th",
    single: "euro-thailand",
  }
};