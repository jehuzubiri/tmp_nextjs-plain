import React from "react";
import { MaxWidthControl } from "@src/components/Others";
import { Typography } from "@src/components/DataDisplay";

const SEOContent = ({ paragraph = "" }) => {
  return (
    <MaxWidthControl withParent>
      <Typography text={paragraph} isHeader tagType="textParagraph" />
    </MaxWidthControl>
  );
};

export default SEOContent;
