import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  optionsContainer: {
    display: 'flex'
  },
  button: {
    height: 50,
    marginTop: 9,
    marginLeft: 5
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <Box className={classes.optionsContainer}>
      <img src={props.img} alt='option' height={66} />
      <Button
        variant="contained"
        color={props.color}
        className={`${classes.button} `}
      >
        {props.buttonText}
      </Button>
    </Box>
  );
};
