import mediaQuery from "@src/constants/MediaQuery";
import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme, useMediaQuery } from "@mui/material";

const useFooterStyle = () => {
  const { } = mediaQuery("down");
  const theme = useTheme();

  return {
    mainContainer: {
      border: "1px solid orange",
      padding: "4rem 0",
      backgroundColor: theme.palette.background.black,
      ...FLEXBOX.allCenter,
      width: "100%",
    }
  };
};

export default useFooterStyle;
