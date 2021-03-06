import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "#0ECB90",
            newColorName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        )
        ValidatorForm.addValidationRule('isColorUnique', value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        )
    }
    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({ newColorName: "" })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    }
    render() {
        const { paletteFull, classes } = this.props;
        const {currentColor, newColorName} = this.state;
        return (
            <div className={classes.root}>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <TextValidator
                        name="newColorName"
                        placeholder="Color Name"
                        variant="filled"
                        className={classes.colorNameInput}
                        value={newColorName}
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Color name required", "Color name must be unique", "Color already used"]}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={paletteFull ? {} : { backgroundColor: currentColor }}
                        disabled={paletteFull}
                        className={classes.addColor}
                    >
                        {paletteFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);