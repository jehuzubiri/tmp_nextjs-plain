/* eslint-disable react-hooks/rules-of-hooks */
import { FLEXBOX } from "@src/constants/Snippet";
import { useTheme } from "@mui/material";
import mediaQuery from "@src/constants/MediaQuery";

const useFloatStyle = (scrolled) => {
  const theme = useTheme();
  const { isLapS } = mediaQuery("down");

  return {
    mainContainer: {
      transition: theme.transitions.min,
      opacity: !scrolled ? 0 : 1,
      pointerEvents: "none",
      position: "fixed",
      bottom: `calc(${scrolled ? "1rem" : "1.5rem"} + env(safe-area-inset-bottom))`,
      width: "100%",
      zIndex: 999,
      ...FLEXBOX.allCenter,
    },
    mainButton: {
      pointerEvents: !scrolled ? "none" : "visible",
      cursor: "pointer",
      width: "fit-content",
      padding: "0.25rem 2rem",
      borderRadius: "1.5rem",
      border: `1px solid ${theme?.palette?.colors?.gray}`,
      backgroundColor: theme.palette.background.black,
      ...FLEXBOX.allCenter,
      boxShadow: theme?.palette?.backShadow?.darkShadow
    },
    iconSize: {
      fontSize: "2rem",
    }
  }
}

export default useFloatStyle;