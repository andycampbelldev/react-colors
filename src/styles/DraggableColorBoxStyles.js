import chroma from "chroma-js";

import sizes from "./sizes";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.5px",
        "&:hover svg": {
            color: "#FFF",
            transform: "scale(1.2)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%",
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "5%",
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        bottom: "0",
        left: "0",
        color: props => chroma(props.color).luminance() <= 0.08 ? "#FFF" : "#000",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        "& span": {
            padding: "10px"
        },
        "& svg": {
            padding: "10px"
        }
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;