import React, { Component } from "react";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { arrayMove } from "react-sortable-hoc";

import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

import seedColors from "./seedColors";
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  }
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors,
      newPaletteName: ""
    }
    this.addNewColor = this.addNewColor.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  addNewColor(newColor) {
    this.setState({ colors: [...this.state.colors, newColor], newColorName: "" })
  }
  addRandomColor() {
    const { colors } = this.state;
    const allColors = this.props.palettes.map(p => p.colors).flat();
    let i;
    let randomColor;
    let isDuplicateColor = true;
    while(isDuplicateColor) {
      i = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[i];
      isDuplicateColor = colors.some(
        color => color.name === randomColor.name
      );
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }
  clearColors() {
    this.setState({ colors: [] })
  }
  removeColor(colorName) {
    this.setState({ colors: this.state.colors.filter(color => color.name !== colorName) })
  }
  handleDrawerOpen() {
    this.setState({ open: true });
  };
  handleDrawerClose() {
    this.setState({ open: false });
  };
  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors
    this.props.savePalette(newPalette)
    this.props.history.push("/");
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }))
  }
  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors
    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open}
          palettes={palettes} 
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button variant="contained" className={classes.button} color="secondary" onClick={this.clearColors}>Clear Palette</Button>
              <Button variant="contained" className={classes.button} color="primary" onClick={this.addRandomColor} disabled={paletteFull}>Random Color</Button>
            </div>
            <ColorPickerForm paletteFull={paletteFull} addNewColor={this.addNewColor} colors={colors} />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={10}
          />
        </main>
      </div>
    );
  }
}
    
export default withStyles(styles, { withTheme: true })(NewPaletteForm);