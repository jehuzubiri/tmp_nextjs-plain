const isValidString = (param) => typeof param === "string" && param !== "";

const GlobalScripts = ({ script }) => {
  if (isValidString(script)) {
    return (
      <div
        id="global-scripts"
        dangerouslySetInnerHTML={{ __html: script }}
      ></div>
    );
  }

  return null;
};

export default GlobalScripts;
