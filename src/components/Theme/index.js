import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useCutomStyles } from '@src/components/CustomStyles';

const Theme = ({ children }) => {
  const pageTheme = createTheme({
    palette: {
      background: {
        primary: '#2C2C2C',
        white: 'white',
        black: '#1D1D1D',
      },
      status: {
        info: '',
        success: '',
        warning: '',
        error: '',
      },
      colors: {
        primary: '#2C2C2C',
        red: '#860303',
        white: 'white',
        black: '#1D1D1D',
      },
      gradient: {
        black:
          'linear-gradient(180deg, rgba(38,38,38,1) 19%, rgba(18,18,18,1) 75%)',
        black_transparent:
          'linear-gradient(180deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))',
      },
    },
    breakpoints: {
      values: {
        mobile: 360, // MOBILE_S
        mobile_m: 600, // MOBILE_M
        tablet: 800, // TABLET
        laptop: 1024, // LAPTOP_S
        default: 1200, //DEFAULT CONTAINER
        laptop_m: 1280, // LAPTOP_M
        laptop_l: 1440, // LAPTOP_L
      },
    },
    typography: {
      fontFamily: ['Inter', 'Bochan Serif', 'Kumbh Sans'].join(','),
    },
    useCutomStyles,
  });

  return (
    <ThemeProvider theme={pageTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
