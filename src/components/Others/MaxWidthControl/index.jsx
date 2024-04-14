import React from "react";
import { Box, useTheme } from "@mui/material";
import { FLEXBOX } from "@src/constants/Snippet";
import mediaQuery from "@src/constants/MediaQuery";

const MaxWidthControl = ({ children, withParent = false, sx, parentSx, parentID, component = "div" }) => {
  const theme = useTheme();
  const { isLapM, isMobM } = mediaQuery("down");

  const mainMaxWidthElement = () => (
    <Box
      className="maxwidthcontrol"
      sx={{
        width: "100%",
        maxWidth: "75rem",
        ...sx,
        [isLapM]: {
          padding: "0 2rem",
        },
        [isMobM]: {
          padding: "0 1.25rem !important",
        },
      }}
    >
      {children}
    </Box>
  );

  return (
    <>
      {withParent ? (
        <Box
          sx={{
            background: theme.palette.colors.blacklight,
            padding: "0 0 3rem 0",
            ...FLEXBOX.allCenter,
            ...parentSx,
          }}
          id={parentID}
          component={component}
        >
          {mainMaxWidthElement()}
        </Box>
      ) : (
        mainMaxWidthElement()
      )}
    </>
  );
};

export default MaxWidthControl;
