import React from 'react'
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const UnderDevelopment = () => {
    const style = {
        mainContainer: {
            height: "calc(100vh - 0.1rem)",
            width: "100vw",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            padding: "1rem",
            textAlign: "center",
            background: "linear-gradient(180deg, rgba(38,38,38,1) 19%, rgba(18,18,18,1) 75%)"
        },
        myBannerBox: {
            position: "absolute",
            maxWidth: "50rem",
            width: "100%",
            opacity: 0.030,
        },
        myImageBox: {
            height: "2.5rem",
            width: "auto",
            zIndex: 999
        },
        myImage: {
            priority: true,
            height: 1000,
            width: 1000,
            style: {
                objectFit: "fill",
                objectPosition: "50% 50%",
                width: "100%",
                height: "100%",
            },
        },
        textParagraph: {
            color: "#7D7D7D",
            fontSize: "0.875em",
            fontWeight: "400",
            lineHeight: "1.25em",
            letterSpacing: "0.02em",
            zIndex: 999
        },

    }
    return (
        <Box sx={style?.mainContainer}>
            <Box sx={style?.myBannerBox}>
                <Image
                    src="/assets/banner-comingsoon.svg"
                    alt="Euro EKINGS Logo"
                    {...style?.myImage}
                />
            </Box>
            <Box sx={style?.myImageBox}>
                <Image
                    src="/assets/euro2024-ekings-logo.svg"
                    alt="Euro EKINGS Logo"
                    {...style?.myImage}
                />
            </Box>
            <Typography variant="p" sx={style?.textParagraph}>
                Sorry, our website is under construction. We are currently adding new features and fixing some minor bugs.
            </Typography>
        </Box>
    )
}

export default UnderDevelopment