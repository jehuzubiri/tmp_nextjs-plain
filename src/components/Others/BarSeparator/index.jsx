import React from "react";
import { useTheme, Box } from "@mui/material";
import { FLEXBOX } from "@src/constants/Snippet";
import { MaxWidthControl } from "@src/components/Others";

const BarSeparator = () => {
  const theme = useTheme();
  return (
    <MaxWidthControl
      withParent
      parentID={"barseparator"}
      parentSx={{
        ...FLEXBOX.allCenter,
        background: theme.palette.colors.blacklight,
        padding: "0 0 2rem 0",
      }}
    >
      <Box
        style={{
          height: "0.0625rem",
          width: "100%",
          borderBottom: `1px solid ${theme.palette.colors.gray}`,
        }}
      />
    </MaxWidthControl>
  );
};

export default BarSeparator;
