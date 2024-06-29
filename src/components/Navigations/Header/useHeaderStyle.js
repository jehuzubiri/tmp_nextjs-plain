/* eslint-disable react-hooks/rules-of-hooks */
import { FLEXBOX } from '@src/constants/Snippet';
import { useTheme } from '@mui/material';

const useHeaderStyle = ({ scrolled }) => {
  const theme = useTheme();

  return {
    root: {
      ...FLEXBOX.allCenter,
      background: theme.palette.gradient.black,
      boxShadow: scrolled ? theme.palette.backShadow.lightOrDarkRim : 'unset',
      padding: '1.5rem 0',
      width: '100%',
      color: theme.palette.colors.white,
      left: 0,
      top: '-0.0625rem',
      paddingRight: 'unset !important',
    },
    widthControl: {
      ...FLEXBOX.rowCenterBetween,
    },
  };
};

export default useHeaderStyle;
