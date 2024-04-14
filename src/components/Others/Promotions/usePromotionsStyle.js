import mediaQuery from "@src/constants/MediaQuery";
import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme } from "@mui/material";

const usePromotionsStyle = (loading = false) => {
  const theme = useTheme();
  const { isDefault, isTab, isLapS } = mediaQuery("down");

  return {
    mainContainer: {
      padding: "4rem 0",
    },
    maxWidthContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    gridContainer: {
      display: "flex",
      gap: "1.5rem",
      flexDirection: "row",
      [isTab]: {
        flexDirection: "column",
      },
    },
    mainCard: {
      flex: 1,
      flex: "0 0 31.9%",
      borderRadius: "0.1875rem",
      overflow: "hidden",
      position: "relative",
      width: "100%",
      boxShadow: loading ? theme.palette.backShadow.lightOrDarkRim : "unset",
      ...FLEXBOX.col,
      transition: theme.transitions.max,
      [isDefault]: {
        flex: "0 0 48.84%",
      },
      [isTab]: {
        flex: "0 0 31.9%",
      },
      [isLapS]: {
        flex: "0 0 31.6%",
      },
      [theme.breakpoints.down(1279)]: {
        flex: "0 0 31.8%",
        height: "auto",
      },
      [theme.breakpoints.down(1177)]: {
        flex: "0 0 31.7%",
      },
      [theme.breakpoints.down(1108)]: {
        flex: "0 0 31.6%",
      },
      [theme.breakpoints.down(1100)]: {
        flex: "0 0 31.6%",
      },
      [theme.breakpoints.down(1045)]: {
        flex: "0 0 31.1%",
      },
      [theme.breakpoints.down(822)]: {
        flex: "0 0 30.9%",
      },
      [theme.breakpoints.down(746)]: {
        flex: "100%",
      },
    },

    cardItem: {
      width: "100%",
      height: "fit-content",
      overflow: "hidden",
      padding: "0 !important",
      marginBottom: "1rem",
    },
    imgContainer: {
      position: "relative",
      aspectRatio: "97 / 30",
      overflow: "hidden",
    },
    // imgStyle: {
    //   position: "absolute",
    // },
    cardTitle: {
      color: `${theme.palette.colors.white}`,
      cursor: "pointer",
      transition: theme.transitions.min,
      "&:hover": {
        color: theme.palette.colors.gray,
      },
    },
    myDescription: {
      color: `${theme.palette.colors.white}`,
    },
  };
};
export default usePromotionsStyle;
