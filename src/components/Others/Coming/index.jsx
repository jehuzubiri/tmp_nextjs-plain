/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import useComingStyle from "./useComingStyle";

const ComingSoon = () => {
  const style = useComingStyle();

  return (
    <Box id="comingsoon" sx={style?.mainContainer}>
      <Box sx={style?.myImage}>
        <Image
          src="/assets/banner-comingsoon.svg"
          alt="EKINGS Euro 2024 Image: Coming Soon Placeholder"
          {...useTheme().useCutomStyles.styleImageFill}
        />
      </Box>
    </Box>
  );
};

export default ComingSoon;
