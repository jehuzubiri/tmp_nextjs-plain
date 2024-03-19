const useSwiperStyle = (theme) => ({
    containerSlider: {
        background: "transparent",
        color: "white",
    },
    container: {
        width: "100%",
        color: "white",
        padding: 0,
    },
    containerPagination: {
        width: {
            xl: 1200,
            xxs: "100%",
        },
        pointerEvents: "none",
        color: "white",
        padding: 0,
    },
    btnNav: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderRadius: 50,
        padding: 0,
        minWidth: 0,
        "&:hover, &:disabled": {
            backgroundColor: "transparent",
        },
    },
});

export default useSwiperStyle;
