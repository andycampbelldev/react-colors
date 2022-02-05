import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import PaletteMetaForm from "./PaletteMetaForm";

import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formShowing: false
        }
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }
    showForm() {
        this.setState({
            formShowing: true
        })
    }
    hideForm() {
        this.setState({
            formShowing: false
        })
    }
    render() {
        const { classes, open, handleDrawerOpen, handleSubmit, palettes } = this.props;
        const { formShowing } = this.state;
        return (
            <div className={classes.root}>
                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <AddToPhotosIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create A Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button}>
                            Save
                        </Button>
                        <Link to="/">
                            <Button variant="contained" color="secondary" className={classes.button}>Go Back</Button>
                        </Link>
                    </div>
                </AppBar>
                {formShowing && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);