const styles = {
    root: {
        backgroundColor: "#fff",
        border: "1px solid #000",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "fit-content",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "#000",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        minHeight: "25px",
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    deleteIcon: {
        color: "#fff",
        backgroundColor: "#eb3d30",
        height: "20px",
        width: "20px",
        position: "absolute",
        top: "0px",
        right: "0px",
        padding: "10px",
        zIndex: 10,
        opacity: 0,
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;