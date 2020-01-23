import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
}));
const TopMenu = () => {
    const classes = useStyles();
    const [menu, setMenu] = useState([]);

    useEffect(() => {
      axios.get("/json/courses-top-menu.json")
           .then(({data}) => setMenu(data));
    }, []);

    return (<Box className={classes.root}>
      {menu.map((item, index) => (
        <Button key={index}>{item}</Button>
      ))}
    </Box>);
}

export default TopMenu;