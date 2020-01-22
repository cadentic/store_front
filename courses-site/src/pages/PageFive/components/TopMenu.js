import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));
const TopMenu = () => {
    const classes = useStyles();
    return (<Box className={classes.root}>
        <Button>VMware Cloud</Button>
        <Button>Products</Button>
        <Button>Support</Button>
        <Button>Solutions</Button>
        <Button>Professional Services</Button>
        <Button>Downloads</Button>
        <Button>Partners</Button>
        <Button>Company</Button>
    </Box>);
}

export default TopMenu;