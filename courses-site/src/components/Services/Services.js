import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hexagon from "../Hexagon/Hexagon";
import Elearning from "../../resources/svg/Elearning";
import Online from "../../resources/svg/Online";
import Web from "../../resources/svg/Web";
import Server from "../../resources/svg/Server";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "150px",
    paddingRight: "150px",
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    textAlign: "center"
  },
  title: {
    paddingLeft: "150px",
    paddingRight: "150px",
    paddingTop: "50px",
    paddingBottom: "32px"
  },
  hexagon: {
    opacity: "0.5",
    cursor: "pointer",
    transition: "all 0.5s linear",
    "&:hover": {
      opacity: 1
    }
  }
}));

const Services = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" className={classes.title}>
        {" "}
        Services We Offer
      </Typography>
      <Box className={classes.root}>
        <Box className={classes.hexagon}>
          <Hexagon fill="#EE9B52" icon={<Elearning />} />
          <Typography component="p" className={classes.label}>
            e-Learning
          </Typography>
        </Box>
        <Box className={classes.hexagon}>
          <Hexagon fill="#7188F6" icon={<Online />} />
          <Typography component="p" className={classes.label}>
            Online Teaching
          </Typography>
        </Box>
        <Box className={classes.hexagon}>
          <Hexagon fill="#F3A3C8" icon={<Web />} />
          <Typography component="p" className={classes.label}>
            Web Development
          </Typography>
        </Box>
        <Box className={classes.hexagon}>
          <Hexagon fill="#78CED8" icon={<Server />} />
          <Typography component="p" className={classes.label}>
            Server
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Services;
