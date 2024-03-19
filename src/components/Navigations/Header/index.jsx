import { useState, useEffect } from "react";
import { AppBar } from "@mui/material";
import { useRouter } from "next/router";
import { MaxWidthControl } from "@src/components/GeneralCustom";
import useHeaderStyle from "./useHeaderStyle";

const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const style = useHeaderStyle(scrolled);

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
    <AppBar position="fixed" sx={style.mainContainer}>
      <MaxWidthControl sx={style.widthControl}>
        Header Content Here
      </MaxWidthControl>
    </AppBar>
  );
};

export default Header;
