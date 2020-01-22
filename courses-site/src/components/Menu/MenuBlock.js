import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Cloud from "../../resources/svg/Cloud";

const useStyles = makeStyles(theme => ({
  root: {
    background: "transparent",
    boxShadow: "none",
    color: "#FFFFFF",
    position: "relative",
    width: 200,
    minWidth: 200,
    marginRight: 12,
    cursor: "pointer"
  },
  right: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  },
  cloud: {
    marginRight: 6
  }
}));

const MenuBlock = props => {
  const classes = useStyles();
  const { title, content, onClick } = props;
  return (
    <Paper className={classes.root} onClick={onClick}>
      <ChevronRight className={classes.right} />
      <Typography variant="h5" component="h3" className={classes.title}>
        <Cloud className={classes.cloud} />
        {title}
      </Typography>
      <Typography component="p" className={classes.content}>
        {content}
      </Typography>
    </Paper>
  );
};

export default MenuBlock;
