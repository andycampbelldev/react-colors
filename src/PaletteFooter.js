import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
    const { name, emoji, classes } = props;
    return (
        <footer className={classes.root}>
            <span>{name}</span>
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter);