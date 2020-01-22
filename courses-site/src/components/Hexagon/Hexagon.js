import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative"
  },
  hexagon: {
    opacity: "0.5",
    cursor: "pointer",
  },
  secondIcon: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

const Hexagon = props => {
  const classes = useStyles();
  const { fill, icon } = props;
  return (
    <Box className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="163.967"
        height="142"
        viewBox="0 0 163.967 142"
        className={classes.hexagon}
      >
        <path
          id="Path_21"
          data-name="Path 21"
          d="M223.992,521H142.008l-40.992,71,40.992,71h81.984l40.992-71Z"
          transform="translate(-101.016 -521)"
          fill={fill}
        />
      </svg>
      <Box className={classes.secondIcon}>{icon}</Box>
    </Box>
  );
};

export default Hexagon;
