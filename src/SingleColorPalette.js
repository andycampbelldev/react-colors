import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles"

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" }
        this.gatherShades = this.gatherShades.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }
    changeFormat(val) {
        this.setState({ format: val })
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        const allColors  = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }
    render() {
        const { format } = this.state;
        const { classes } = this.props;
        const { name, emoji, id } = this.props.palette;
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.name}
                allColors={false}
            />
        ))
        return(
            <div className={classes.Palette}>
                <Navbar 
                    handleFormatChange={this.changeFormat} 
                    allColors={false}
                />
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
                </div>
                <PaletteFooter 
                    name={name}
                    emoji={emoji}
                />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);