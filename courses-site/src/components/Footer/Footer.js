import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#1F1E2E",
    boxShadow: "none",
    marginTop: 24
  },
  button: {
    margin: theme.spacing(1),
    color: "#808080"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuOptions: {
    display: "flex"
  },
  list: {
    color: "#808080",
    marginLeft: 35
  }
}));

const Footer = () => {
  const classes = useStyles();

  const preventDefault = e => {
    e.preventDefault();
  };

  return (
    <footer position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.menuOptions}>
          <img src={require("../../resources/images/logo.png")} alt="logo" />
          <List
            component="nav"
            aria-label="main mailbox folders"
            className={classes.list}
          >
            <ListItem button>
              <ListItemText primary="Category" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Teach on Xaoore" />
            </ListItem>
          </List>
        </Box>
        <Button href="#" onClick={preventDefault} className={classes.button}>
          Copyright &copy; 2019 Xaoore, Inc.
        </Button>
        <Box className={classes.optionsContainer}>
          <Box className={classes.menuOptions}>
            <Box>
              <Button
                href="#"
                onClick={preventDefault}
                className={classes.button}
              >
                Terms
              </Button>
              <Button
                href="#"
                onClick={preventDefault}
                className={classes.button}
              >
                Privacy
              </Button>
              <Button
                href="#"
                onClick={preventDefault}
                className={classes.button}
              >
                Policy
              </Button>
              <Button
                href="#"
                onClick={preventDefault}
                className={classes.button}
              >
                Cookies
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </footer>
  );
};

export default Footer;
