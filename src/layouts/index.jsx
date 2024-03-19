import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import { Footer, Header } from '../components/Navigations';
import useLayoutStyle from "./useLayoutStyle";

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
  const style = useLayoutStyle();

  return (
    <Box {...style?.sizeStyle} className={`mainlayout ${inter.className}`} sx={style?.overflowControl}>
      <Header />
      <Box className="mainlayout_container" sx={style}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
