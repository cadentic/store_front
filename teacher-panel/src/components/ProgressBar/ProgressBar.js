import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: "#4D4D4D",
    borderRadius: 20
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#3FA2F7"
  }
})(LinearProgress);

const ProgressBar = props => {
  const { className, value } = props;
  return (
    <BorderLinearProgress
      className={`progress-bar-component ${className || ""}`}
      variant="determinate"
      color="primary"
      value={value}
    />
  );
};

export default ProgressBar;
