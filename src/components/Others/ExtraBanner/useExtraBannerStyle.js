import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme } from "@mui/material";
import mediaQuery from "@src/constants/MediaQuery";

const useExtraBannerStyle = () => {
  const theme = useTheme();
  const { isMobM } = mediaQuery("down");

  return {
    mainContainer: {
      cursor: "pointer",
      backgroundColor: theme?.palette?.background?.blacklight,
      ...FLEXBOX.allCenter,
      width: "100%",
      aspectRatio: "14 / 1",
      overflow: "hidden",
      [isMobM]: {
        aspectRatio: "3 / 1",
      },
    },
  };
};

export default useExtraBannerStyle;
