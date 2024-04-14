import { useMediaQuery, useTheme } from "@mui/material";
import mediaQuery from "@src/constants/MediaQuery";

const usePopAdsStyle = () => {
  const { isMobM, isMobS } = mediaQuery("down");

  return {
    main: {
      cursor: "pointer",
      aspectRatio: "1200 / 343",
      width: "100%",
      [isMobM]: {
        aspectRatio: "551 / 878",
      },
      [isMobS]: {
        aspectRatio: "unset"
      }
    },
    isMobM: useMediaQuery(isMobM),
    loading: {
      backgroundColor: useTheme().palette.background.blacktransp,
      overflow: "hidden",
      width: "100%",
      position: "relative"
    },
  };
};

export default usePopAdsStyle;
