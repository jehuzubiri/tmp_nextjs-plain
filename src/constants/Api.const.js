export const ApiSettings = {
  main: {
    baseURL: "",
    defaultToken: null,
  },
  pokemon: {
    baseURL: process.env.NEXT_PUBLIC_API_HOST || "",
    defaultToken: null,
  },
  strapi: {
    baseURL: "",
    defaultToken: null,
  },
};