export const useCutomStyles = {
  //BUTTONS ...
  styleBtnPrimary: {
    background: "#FAC50F",
    background:
      "linear-gradient(180deg, rgba(250,197,15,1) 19%, rgba(255,231,150,1) 49%, rgba(250,197,15,0.8799894957983193) 75%)",
    cursor: "pointer",
    border: "unset",
    borderRadius: "0.25rem",
    fontWeight: "600",
    padding: "0.75rem 1.5rem",
    transition: "all 0.3s",
    ["span"]: {
      color: "black",
    },
  },
  styleBtnSecondary: {
    border: `1px solid white`,
    cursor: "pointer",
    borderRadius: "0.25rem",
    background: "unset",
    fontWeight: "600",
    padding: "0.75rem 1.5rem",
    "&:hover": {
      border: `1px solid #FAC50F`,
      ["span"]: {
        color: "#FAC50F !important",
      },
    },
    ["& span"]: {
      transition: "all 0.3s ease",
    },
  },
  styleBtnText: {
    pointerEvents: "visible",
    transition: "0.3s",
    borderBottom: `1px solid white`,
    width: "fit-content",
    cursor: "pointer",
    "&:hover": {
      color: "#FAC50F",
      borderBottom: `1px solid #FAC50F`,
    },
  },

  //TYPOGRAPHY ...
  styleTypography: {
    textCaption: {
      //EURO 2024 H0
      color: "white",
      fontSize: "2.25em",
      fontWeight: "700",
      // lineHeight: "3.15em",
      lineHeight: "1.6em",
      letterSpacing: "0.01em",
    },
    textHeader: {
      //V2 EK Wala pa
      color: "white",
      fontSize: "1.75em",
      fontWeight: "700",
      lineHeight: "1.8125em",
      letterSpacing: "0.01em",
    },
    textHeaderSub: {
      //V2 EK Desktop Body Copy Bold
      color: "white",
      fontSize: "1.125em",
      fontWeight: "700",
      lineHeight: "1.5625em",
      letterSpacing: "0.02em",
    },
    textHeaderSub2: {
      //V2 EK Mobile Button Text
      color: "white",
      fontSize: "1em",
      fontWeight: "700",
      lineHeight: "1.1875em",
      letterSpacing: "0.01em",
    },
    textParagraph: {
      //V2 EK Mobile Body Copy
      color: "white",
      fontSize: "0.875em",
      fontWeight: "400",
      lineHeight: "1.25em",
      letterSpacing: "0.02em",
    },
  },

  //IMG FILL COVER
  styleImageCover: {
    priority: true,
    height: 100,
    width: 100,
    style: {
      objectFit: "cover",
      objectPosition: "0 0",
      width: "100%",
      height: "100%",
    },
  },
  styleImageFill: {
    priority: true,
    height: 100,
    width: 100,
    style: {
      objectFit: "fill",
      objectPosition: "50% 50%",
      width: "100%",
      height: "100%",
    },
  },
  styleLoadingFill: {
    variant: "text",
    width: 100,
    height: 100,
    sx: {
      background: "#262626",
      transform: "unset !important",
      transformOrigin: "unset !important",
      height: "100vh !important",
      width: "100% !important",
    },
  },
};
