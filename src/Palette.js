import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles";

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }
    changeFormat(val) {
        this.setState({ format: val })
    }
    render() {
        const { classes } = this.props;
        const { colors, name, emoji, id} = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id}
                allColors={true}
                moreUrl={`/palette/${id}/${color.id}`}
            />)
        )
        return (
            <div className={classes.Palette}>
                <Navbar 
                    level={level}  
                    handleFormatChange={this.changeFormat} 
                    changeLevel={this.changeLevel}
                    allColors={true}
                />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter
                    name={name}
                    emoji={emoji}
                />
            </div>
        )
    }
}

export default withStyles(styles)(Palette);