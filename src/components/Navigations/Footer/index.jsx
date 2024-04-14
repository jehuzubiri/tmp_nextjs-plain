import { MaxWidthControl } from "@src/components/Others";
import useFooterStyle from "./useFooterStyle";

const Footer = () => {
  const style = useFooterStyle();

  return (
    <MaxWidthControl withParent parentSx={style?.mainContainer} sx={{}} component="footer">
      Footer Content Here
    </MaxWidthControl>
  );
};

export default Footer;
