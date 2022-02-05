import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from "react-sortable-hoc";

import styles from "./styles/DraggableColorBoxStyles";


function DraggableColorBox(props) {
    const { classes, handleDelete, name, color } = props;
    function handleClick() {
        handleDelete(name);
    }
    return (
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteOutlinedIcon 
                    className={classes.deleteIcon}
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default SortableElement(withStyles(styles)(DraggableColorBox));