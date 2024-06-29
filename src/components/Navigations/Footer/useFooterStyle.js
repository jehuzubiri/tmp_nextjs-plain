import { FLEXBOX } from '@src/constants/Snippet';
import { useTheme } from '@mui/material';

const useFooterStyle = () => {
  const theme = useTheme();

  return {
    root: {
      border: '1px solid orange',
      padding: '4rem 0',
      backgroundColor: theme.palette.background.black,
      ...FLEXBOX.allCenter,
      width: '100%',
    },
  };
};

export default useFooterStyle;
