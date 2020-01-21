import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { Search } from "@material-ui/icons";
import { Avatar } from "../../resources/svg/avatar";

import "./Header.scss";

const useStyles = makeStyles({
  root: {
    background: "#1F1E2E",
    boxShadow: "none"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  searchBox: {
    background: "#B3B3B3",
    border: "1px solid #FFFFFF",
    borderRadius: "10px",
    height: "22.5px",
    display: "flex",
    paddingLeft: "12px",
    paddingRight: "12px",
    "& button": {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 2
    },
    "& svg": {
      height: "20px",
      width: "20px"
    },
    "& button:hover": {
      background: "#B3B3B3"
    }
  },
  menuOptions: {
    display: "flex",
    alignItems: "center",
    "& a, & svg": {
      color: "#FFFFFF",
      marginLeft: "30px"
    }
  }
});

const Student = () => {
  const classes = useStyles();

  const preventDefault = e => {
    e.preventDefault();
  };

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={require("../../resources/images/logo.png")} alt="logo" />
        <Paper className={classes.searchBox}>
          <InputBase className={classes.input} />
          <IconButton
            className={classes.iconButton}
            disableRipple={true}
            aria-label="search"
          >
            <Search />
          </IconButton>
        </Paper>
        <Box className={classes.menuOptions}>
          <Box>
            <Link href="#" className="m-l-12" onClick={preventDefault}>
              Home
            </Link>
            <Link href="#" className="m-l-12" onClick={preventDefault}>
              Messages
            </Link>
            <Link href="#" className="m-l-12" onClick={preventDefault}>
              Logout
            </Link>
          </Box>
          <Avatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Student;
