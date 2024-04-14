/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from 'next/image'
import { Box, Skeleton, useTheme } from '@mui/material'
import usePromotionsStyle from "./usePromotionsStyle";
import useValidateImage from "@src/hooks/useValidateImage";

const PromotionsItem = ({ src }) => {
  const style = usePromotionsStyle();
  const { validImg } = useValidateImage(src);

  return (
    <Box sx={style?.cardItem}>
      <Box sx={style?.imgContainer}>
        {validImg ?
          <Image
            sx={style?.imgStyle}
            src={src}
            alt={`Ekings Image: ${src}`}
            {...useTheme().useCutomStyles.styleImageCover}
          />
          : <Skeleton {...useTheme().useCutomStyles.styleLoadingFill} />}
      </Box>
    </Box>
  )
}

export default PromotionsItem;