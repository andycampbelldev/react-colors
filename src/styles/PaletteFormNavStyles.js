import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes"

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px"
    },
    appBarShift: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {
        marginRight: "1rem",
        "& a": {
            textDecoration: "none",
        },
        [sizes.down("xs")]: {
            marginRight: "0.1rem"
        }
    },
    button: {
        margin: "0 0.5rem",
        [sizes.down("xs")]: {
            margin: "0 0.1rem",
            padding: "0.25rem"
        }
    }
})

export default styles;