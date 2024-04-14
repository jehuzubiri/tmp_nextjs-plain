import { useEffect, useState } from "react";
import { validImageUrl } from "@src/utils/General.helper";

const useValidateImage = (src) => {
  const [validImg, setValidImg] = useState(false);

  useEffect(() => {
    validImageUrl(src, isValid => {
      setValidImg(isValid)
    })
  }, [src]);

  return { validImg }
}

export default useValidateImage;