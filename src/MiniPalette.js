import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
    constructor(props) {
        super(props);
        this.openDialog = this.openDialog.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    openDialog(e) {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    }
    handleClick() {
        this.props.goToPalette(this.props.id)
    }
    render() {
        const { classes, paletteName, emoji, colors} = this.props;
        const miniColorBoxes = colors.map(color => (
            <div
                className={classes.miniColor} 
                style={{backgroundColor: color.color}}
                key={color.name}
            />
        ))
        return (
            <div className={classes.root} onClick={this.handleClick}>
                <DeleteOutlinedIcon className={classes.deleteIcon} onClick={this.openDialog} />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette);