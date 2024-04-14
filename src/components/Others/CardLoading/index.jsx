import { Box, Skeleton, useTheme } from "@mui/material";
import { FLEXBOX } from "@src/constants/Snippet";
import React from "react";

const CardLoading = ({ bannerHeight = "7rem", sx }) => {
  const style = {
    backgroundColor: useTheme().palette.background.blacktransp,
  };
  return (
    <Box
      sx={{
        padding: "1.5rem 1rem",
        ...FLEXBOX.col,
        ...sx,
      }}
    >
      <Skeleton variant="text" width="40%" sx={style} />
      <Skeleton variant="text" width="100%" height={bannerHeight} sx={style} />
      <Skeleton variant="text" sx={style} />
      <Skeleton variant="text" width="70%" sx={style} />
    </Box>
  );
};

export default CardLoading;
