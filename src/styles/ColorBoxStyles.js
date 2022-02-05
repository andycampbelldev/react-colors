import chroma from "chroma-js";
import sizes from  "./sizes";

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.allColors ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.allColors ? "20%" : "33.3333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.allColors ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.allColors ? "5%" : "10%",
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "#000" : "#FFF"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "#FFF" : "#000"
    },
    seeMore: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        bottom: "0",
        right: "0",
        border: "none",
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.5)" : "#FFF",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() >= 0.6 ? "#000" : "#FFF",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        bottom: "0",
        left: "0",
        color: "#000",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transform: "scale(0.1)",
        transition: "transform 0.5s ease-in-out"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0)",
        opacity: "0",
        color: "#fff",
        zIndex: "0",
        textTransform: "uppercase",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px #000",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            [sizes.down("xs")]: {
                fontSize: "4rem"
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showCopyMessage: {
        opacity: "1",
        transform: "scale(1)",
        transition: "all 0.5s ease-in-out",
        zIndex: "11",
        transitionDelay: "0.2s"
    }
}

export default styles;