import React, { useEffect } from "react";

function Survey() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="mb-2 mb-md-5"
      data-tf-widget="BSjR2nFJ"
      data-tf-opacity="100"
      data-tf-iframe-props="title=Happiness Survey By Mountain View"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      data-tf-hidden="group1_grade="
      style={{ width: "100%", height: "600px" }}
    ></div>
  );
}

export default Survey;
