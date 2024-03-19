import mediaQuery from "@src/constants/MediaQuery";

const sxLayout = () => {
    const { isTab } = mediaQuery("down");
    return {
        width: "100%",
        position: "absolute",
        left: 0,
        top: "4.5rem",
        border: "1px solid green",
        [isTab]: {
            top: "3rem"
        },
        sizeStyle: {
            width: "100%",
            height: "100%",
        },
        overflowControl: {
            overflow: "hidden",
        }
    }
}

export default sxLayout