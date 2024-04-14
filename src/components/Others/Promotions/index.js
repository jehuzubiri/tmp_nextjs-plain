import { useRef } from "react";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";
import { Typography } from "@src/components/DataDisplay";
import { MaxWidthControl } from "@src/components/Others";
import usePromotionsStyle from "./usePromotionsStyle";
import PromotionsItem from "./PromotionsItem";
// import useGsapPromotionHook from "@src/hooks/useGsapPromotionHook"; //@DESC: Dont remove...

const Promotions = ({ data, label = "Promotions" }) => {
  let refPromotionsItems = useRef([]);
  const listData = data || [];
  const style = usePromotionsStyle();
  // const renderGsap = useGsapPromotionHook(refPromotionsItems, ".gsap_promotions"); //@DESC: Dont remove...

  return (
    <MaxWidthControl sx={style?.maxWidthContainer} withParent parentID="promotions" parentSx={style?.mainContainer}>
      <Typography text={label} tagType="textHeader" />
      <Box sx={style?.gridContainer} className="gsap_promotions">
        {listData.map((card, idx) => (
          <Box
            ref={(element) => {
              refPromotionsItems.current[idx + 1] = element;
            }}
            sx={style?.mainCard}
            key={`key:${idx}`}
          >
            <PromotionsItem src={card?.src} />
            <Typography
              text={card.title}
              sx={style?.cardTitle}
              tagType="textHeaderSub"
              onClick={() => window.open(card?.link)}
            />
            <Typography text={card.description} sx={style?.myDescription} tagType="textParagraph" />
          </Box>
        ))}
      </Box>
    </MaxWidthControl>
  );
};

export default Promotions;
