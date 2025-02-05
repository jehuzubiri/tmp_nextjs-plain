
export const GeneralServices = async (props) => {
  //@DESC params type: 
  // > type: main | pokemon | strapi
  // > method: get | post | put | patch
  // > path: this is endpoint
  // > params: this is optional
  // > signal: this is optional for api cancel

  try {
    const res = await fetch(`/api/${props.path}`, {
      method: "POST",
      body: JSON.stringify(props),
    });
    return await res.json();
  } catch (error) {
    return {
      ok: false,
      message: "Opps! Error on: General Services",
      axiosResponse: error,
    };
  }

}
