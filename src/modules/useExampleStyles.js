import { useTheme } from '@mui/material';

const useStyles = () => {
  const theme = useTheme();

  return {
    root: {
      width: '100%',
      maxWidth: '64rem',
      border: '1px solid red',
      ...theme.useCutomStyles.flexBox.col,
      [theme.breakpoints.up('tablet_s')]: {
        ...theme.useCutomStyles.flexBox.rowCenter,
        border: '1px solid blue',
      },
    },
  };
};

export default useStyles;
