import { MaxWidth } from "@src/components/CustomComponents";
import useFooterStyle from "./useFooterStyle";

const Footer = () => {
  const style = useFooterStyle();

  return (
    <MaxWidth withParent parentSx={style?.root} sx={{}} component="footer">
      Footer Content Here
    </MaxWidth>
  );
};

export default Footer;
