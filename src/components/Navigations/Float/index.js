import React from 'react'
import { Box } from "@mui/material";
import { Icon } from '@src/components/DataDisplay';
import useWindowScrolledHook from '@src/hooks/useWindowScrolledHook';
import useFloatStyle from './useFloatStyle';

const Float = () => {
  const { scrolled } = useWindowScrolledHook(150);
  const style = useFloatStyle(scrolled);

  return (
    <Box sx={style?.mainContainer}>
      <Box sx={style?.mainButton} onClick={() => {
        window.scrollTo(0, 0);
      }}>
        <Icon
          name="icon-arrow-up icon-center"
          props={style?.iconSize}
        />
      </Box>
    </Box>
  )
}

export default Float