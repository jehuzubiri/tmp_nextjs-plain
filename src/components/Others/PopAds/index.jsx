/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Box, Skeleton, useTheme } from "@mui/material";
import Image from "next/image";
import { Modal } from "@src/components/Feedback";
import { isObjectEmpty } from "@src/utils/common";
import { getLocalStorageWithExpiry, setLocalStorageWithExpiry } from "@src/utils/General.helper";
import useValidateImage from "@src/hooks/useValidateImage";
import usePopAdsStyle from "./usePopAdsStyle";

const PopAds = ({ data }) => {
  const style = usePopAdsStyle();
  const [popAds, setPopAds] = useState(false);
  const [popImgs, setPopImgs] = useState({});
  const { validImg } = useValidateImage(popImgs?.src);

  useEffect(() => {
    window.scrollTo(0, 0);
    const isntFirst = getLocalStorageWithExpiry("FIRST_VISIT");
    if (!isntFirst) {
      setPopAds(true);
      setLocalStorageWithExpiry("FIRST_VISIT", "yes", 30);
    }
  }, []);

  useEffect(() => {
    if (!isObjectEmpty(data)) {
      setPopImgs(data[style?.isMobM ? "portrait" : "landscape"]);
    }
  }, [data, style?.isMobM]);

  return (
    <Modal open={popAds} handleClose={() => setPopAds(false)} sx={style?.main} className="MuiModal-pop_ads">
      {!!validImg ? (
        <Image
          onClick={() => {
            if (!!popImgs?.link) window.open(popImgs?.link);
          }}
          src={popImgs?.src || ""}
          alt={popImgs?.alt || ""}
          {...useTheme().useCutomStyles.styleImageCover}
        />
      ) : (
        <Box sx={style?.loading}>
          <Skeleton {...useTheme().useCutomStyles.styleLoadingFill} />
        </Box>
      )}
    </Modal>
  );
};

export default PopAds;
