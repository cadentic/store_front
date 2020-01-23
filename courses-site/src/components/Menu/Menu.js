import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuBlock from "./MenuBlock";
import axios from "axios";

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
  const [categories, setCategories] = useState([]);

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

    axios.get("/json/courses-category.json")
         .then(({data}) => setCategories(data));
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
      {categories.map((categorie, index) => (
        <Fragment key={index}>
          {categorie.title && (
            <Typography variant="p" className="m-t-24">
              {categorie.title}
            </Typography>)}
      <Box className={`${classes.rowOption} m-b-24`}>
        {categorie.blocks.map(block => (
        <MenuBlock title={block.title} content={block.content} row={block.row} />
        ))}
      </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default Menu;
