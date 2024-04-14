import React from 'react'
import { Box, useTheme } from "@mui/material";
import { limitParagraphByCount } from '@src/utils/string';

const RichText = ({ richText, sx = {}, limitCount = 9999 }) => {
  const theme = useTheme();
  const createMarkup = () => {
    // const textA = `${richText}`;
    // const regexBold = /\*\*(.*?)\*\*/gm;
    // const textB = textA.replace(regexBold, '<strong>$1</strong>');
    // const regexUnderline = /_(.*?)_/g;
    // let html = textB.replace(regexUnderline, '<i>$1</i>');
    let html = `${richText}`
    return { __html: limitParagraphByCount(html, limitCount) };
  };

  return (
    <Box sx={{ ...theme?.useCutomStyles?.styleTypography?.textParagraph, ...sx }}>
      <p dangerouslySetInnerHTML={createMarkup()} />
    </Box>
  );
}

export default RichText