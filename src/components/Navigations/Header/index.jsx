import { useState, useEffect } from 'react';
import { AppBar } from '@mui/material';
import { useRouter } from 'next/router';
import { MaxWidth } from '@src/components/CustomComponents';
import useHeaderStyle from './useHeaderStyle';

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const style = useHeaderStyle({ scrolled });

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <AppBar position='fixed' sx={style.root}>
      <MaxWidth sx={style.widthControl}>Header Content Here</MaxWidth>
    </AppBar>
  );
};

export default Header;
