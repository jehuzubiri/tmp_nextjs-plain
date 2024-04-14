/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import useExtraBannerStyle from "./useExtraBannerStyle";

const ExtraBanner = ({ data }) => {
  const style = useExtraBannerStyle();

  return (
    <Box
      id="extrabanner"
      sx={style.mainContainer}
      onClick={() => {
        if (!!data?.link) window.open(data?.link);
      }}
    >
      <Image alt={data?.alt} src={data?.src} {...useTheme().useCutomStyles.styleImageCover} />
    </Box>
  );
};

export default ExtraBanner;
