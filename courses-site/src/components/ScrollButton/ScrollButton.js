import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        right: 24,
        bottom: 24
    },

}));

const ScrollButton = () => {
    const classes = useStyles();
    return (
        <Fab color="primary" className={classes.root} onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}>
            <KeyboardArrowUp />
        </Fab>
    );
}

export default ScrollButton;