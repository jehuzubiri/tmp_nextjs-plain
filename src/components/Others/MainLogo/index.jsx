/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import mediaQuery from "@src/constants/MediaQuery";
import { useMediaQuery } from "@mui/material";

const MainLogo = ({ isMain = false, logo }) => {
  const { isTab } = mediaQuery("down");
  const handleLogoSize = () => {
    let imgSize = {
      width: 160,
      height: 40,
    };
    if (useMediaQuery(isTab) && isMain) {
      imgSize.width = 93.33;
      imgSize.height = 23.33;
    }
    return imgSize;
  };

  return (
    <Image
      id="mainlogo"
      src={logo?.src}
      alt={logo?.alt}
      width={handleLogoSize().width}
      height={handleLogoSize().height}
      onClick={() => {
        if (isMain) {
          // logo?.link === "/" ? window.scrollTo(0, 0) : window.open(logo?.link);
          logo?.link === "/" ? window.scrollTo(0, 0) : window.location.replace(logo?.link);
        }
      }}
      style={{
        cursor: isMain ? "pointer" : "unset",
        marginTop: "-0.5rem",
      }}
    />
  );
};

export default MainLogo;
