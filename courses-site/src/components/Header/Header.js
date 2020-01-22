import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GridOn from "@material-ui/icons/GridOn";
import Button from "@material-ui/core/Button";
import Menu from "../Menu/Menu";
const useStyles = makeStyles(theme => ({
  root: {
    background: "#FFFFFF",
    boxShadow: "none",
    "& img": {
      marginBottom: "-44px"
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  toolbar: {
    display: "flex"
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-end"
  },

  categoryButton: {
    boxShadow: "none",
    background: "#FFFFFF",
    color: "#808080"
  },
  searchBox: {
    background: "#E6E6E6",
    border: "1px solid #B3B3B3",
    borderRadius: "10px",
    height: "22.5px",
    display: "flex",
    paddingLeft: "12px",
    paddingRight: "12px",
    boxShadow: "none"
  },
  callMe: {
    color: "#297FCA",
    width: "100%",
    marginBottom: 12,
    "& h4": {
      textAlign: "right"
    }
  },
  menuOptions: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& a": {
      color: "#808080",
      marginLeft: "30px"
    }
  },
  signup: {
    background:
      "linear-gradient(273deg, rgba(2,0,36,1) 0%, rgba(255,231,193,1) 0%, rgba(255,243,223,1) 86%, rgba(255,255,255,1) 100%)"
  },
  login: {
    border: "1px solid #4D41B3",
    height: 30,
    display: "inline-block",
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: "7px !important"
  }
}));

const Header = () => {
  const [menu, openMenu] = React.useState(false);
  const classes = useStyles();

  const preventDefault = e => {
    e.preventDefault();
  };

  const handleMemu = () => {
    openMenu(!menu);
  };


  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={require("../../resources/images/logo.png")} alt="logo" />
        <Box className={classes.optionsContainer}>
          <Box style={{ position: "relative" }}>
            <Button
              variant="contained"
              size="medium"
              className={classes.categoryButton}
              startIcon={<GridOn />}
              onClick={handleMemu}
            >
              Category
            </Button>
            {menu && <Menu className='menu' closeMenu={() => handleMemu()} />}
          </Box>
          <Paper className={classes.searchBox}>
            <InputBase className={classes.input} />
          </Paper>
          <Box className={classes.menuOptions}>
            <Box className={classes.callMe}>
              <Typography variant="h4">Call 965 777 231</Typography>
            </Box>
            <Box>
              <Button href="#" onClick={preventDefault}>
                Courses
              </Button>
              <Button href="#" onClick={preventDefault}>
                Teach on Xaoore
              </Button>
              <Button
                href="#"
                className={classes.signup}
                onClick={preventDefault}
              >
                Sign up
              </Button>
              <Button href="#" variant="outlined" onClick={preventDefault}>
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
