import { Box } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Layout = ({ children }) => (
  <Box className={`mainlayout ${inter.className}`}>{children}</Box>
);

export default Layout;
