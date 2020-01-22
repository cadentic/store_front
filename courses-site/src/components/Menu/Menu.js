import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuBlock from "./MenuBlock";

import "./Menu.scss";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    minWidth: 500,
    minHeight: 500,
    bottom: -14,
    transform: "translate(0, 100%)",
    left: 0,
    background: "#000000",
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 12,
    paddingBottom: 12,
    transition: "all 1s linear"
  },
  searchIcon: {
    position: "absolute",
    top: 24,
    left: 23,
    height: 34,
    width: 34
  },
  searchInput: {
    width: "100%",
    border: "1px solid #ffffff",
    marginBottom: 12,
    "& input": {
      paddingLeft: 52,
      border: "none"
    }
  },
  rowOption: {
    marginTop: 24,
    display: "flex"
  },
  optionsContainer: {
    display: 'flex'
  },
  button: {
    height: 50,
    marginTop: 9,
    marginLeft: 5
  }
}));

const Menu = props => {
  const classes = useStyles();
  const [rowOne, openRowOne] = React.useState(false);
  const [rowTwo, openRowTwo] = React.useState(false);
  const [rowThree, openRowThree] = React.useState(false);
  const [rowFour, openRowFour] = React.useState(false);

  const closeMenu = evt => {
    const flyoutElement = document.getElementById("flyout-example");
    let targetElement = evt.target; // clicked element

    do {
      if (targetElement === flyoutElement) {
        return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    props.closeMenu()
  };

  const checkPosition = evt => {
    const flyoutElement = document.getElementById("flyout-example");
    const bounding = flyoutElement.getBoundingClientRect();

    if (bounding.bottom <= 0) {
      props.closeMenu()
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.addEventListener("click", closeMenu);
    document.addEventListener('scroll', checkPosition)
    return function cleanup() {
      document.removeEventListener("click", closeMenu);
      document.removeEventListener('scroll', checkPosition)
    };
  });

  return (
    <Box id="flyout-example" className={`${classes.root} menu-component`}>
      <Search className={classes.searchIcon} />
      <TextField className={classes.searchInput} variant="outlined" />
      <Typography variant="p">SEARCH BY TYPE</Typography>
      <Box className={`${classes.rowOption} m-b-24`}>
        <MenuBlock title="Cloud" content="Browse in demand web" />
        <MenuBlock title="Cloud" content="Browse in demand web" />
        <MenuBlock
          title="Cloud"
          content="Browse in demand web"
          onClick={() => openRowOne(true)}
        />
        {rowOne && (
          <Box className={classes.optionsContainer}>
            <img src={require('../../resources/images/p3.png')} alt='option' height={66} />
            <Button
              variant="contained"
              color="secondary"
              className={`${classes.button} `}
            >
              Button
          </Button>
          </Box>
        )}
      </Box>
      <Typography variant="p" className="m-t-24">
        OUR PRODUCTS
      </Typography>
      <Box className={classes.rowOption}>
        <MenuBlock
          title="Web Dev"
          content="Browse in demand web courses online"
        />
        <MenuBlock
          title="Web Dev"
          content="Browse in demand web courses online"
        />
        <MenuBlock
          title="Cloud"
          content="Browse in demand web"
          onClick={() => openRowTwo(true)}
        />
        {rowTwo && (
          <Box className={classes.optionsContainer}>
            <img src={require('../../resources/images/p3.png')} alt='option' height={66} />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Button
          </Button>
          </Box>
        )}
      </Box>
      <Box className={classes.rowOption}>
        <MenuBlock
          title="Web Dev"
          content="Browse in demand web courses online"
        />
        <MenuBlock
          title="Web Dev"
          content="Browse in demand web courses online"
        />
        <MenuBlock
          title="Cloud"
          content="Browse in demand web"
          onClick={() => openRowThree(true)}
        />
        {rowThree && (
          <Box className={classes.optionsContainer}>
            <img src={require('../../resources/images/p3.png')} alt='option' height={66} />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Button
          </Button>
          </Box>
        )}
      </Box>
      <Box className={classes.rowOption}>
        <MenuBlock
          title="Web Dev"
          content="Browse in demand web courses online"
        />
        <MenuBlock
          title="Web Dev"
          content="Browse in demand web courses online"
        />
        <MenuBlock
          title="Cloud"
          content="Browse in demand web"
          onClick={() => openRowFour(true)}
        />
        {rowFour && (
          <Box className={classes.optionsContainer}>
            <img src={require('../../resources/images/p3.png')} alt='option' height={66} />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Button
          </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Menu;
