import { useEffect, useState } from "react";

const useWindowScrolledHook = (scrollVal = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > scrollVal) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, [scrollVal]);

  return { scrolled }
}

export default useWindowScrolledHook;