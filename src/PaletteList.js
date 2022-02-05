import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import DialogTitle from '@material-ui/core/DialogTitle';
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { TransitionGroup, CSSTransition } from "react-transition-group"

import MiniPalette from "./MiniPalette";

import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletingPalette: ""
        }
        this.closeDialog = this.closeDialog.bind(this);
        this.deletePalette = this.deletePalette.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
        this.openDialog = this.openDialog.bind(this);
    }
    closeDialog() {
        this.setState({ openDeleteDialog: false, deletingPalette: "" });
    }
    deletePalette() {
        this.props.deletePalette(this.state.deletingPalette);
        this.closeDialog();
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    openDialog(id) {
        this.setState({ openDeleteDialog: true, deletingPalette: id });
    }
    render() {
        const { palettes, classes } = this.props;
        const { openDeleteDialog } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.title}>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                            {palettes.map(palette => 
                                <CSSTransition
                                    key={palette.id}
                                    timeout={500}
                                    classNames="fade"
                                >
                                    <MiniPalette 
                                        {...palette} 
                                        goToPalette={this.goToPalette}
                                        openDialog={this.openDialog}
                                        key={palette.id}
                                    />
                                </CSSTransition>
                            )}
                    </TransitionGroup>
                </div>
                <Dialog open={openDeleteDialog} onClose={this.closeDialog} aria-labelledby="delete-dialog-title">
                    <DialogTitle id="delete-dialog-title">Delete Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.deletePalette}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <Check />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <Close />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);