import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme } from "@mui/material";

const useComingStyle = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return {
    mainContainer: {
      width: "100%",
      height: "calc(100vh - 76.8px)",
      minHeight: "30rem",
      overflow: "hidden",
      ...FLEXBOX.allCenter,
      backgroundColor: theme.palette.background.blacklight,
    },
    myImage: {
      padding: "1.5rem",
      maxWidth: "50rem",
      height: "22rem",
      width: "100%",
    },
  };
};
export default useComingStyle;
