/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import mediaQuery from "@src/constants/MediaQuery";
import { Typography } from "@src/components/DataDisplay";
import { useMediaQuery } from "@mui/material";

const PageTitle = ({ label, sx = {}, onClick = () => { } }) => {
  const { isLapS } = mediaQuery("down");

  const setTagType = () => {
    let type = "textCaption"
    if (useMediaQuery(isLapS)) type = "textHeader";
    return type;
  }

  return (
    <Typography text={label} tagType={setTagType()} sx={sx} onClick={onClick} />
  )
}

export default PageTitle