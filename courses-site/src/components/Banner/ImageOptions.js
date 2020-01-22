import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Android from "@material-ui/icons/Android";
import SingleBed from "@material-ui/icons/SingleBed";
import Motorcycle from "@material-ui/icons/Motorcycle";
import Menu from "@material-ui/icons/Menu";
import Videocam from "@material-ui/icons/Videocam";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    "& .text-center": {
      textAlign: "center"
    },
    "& .option-buttons": {
      marginTop: 50,
      marginBottom: 30
    },
    "& .toggle-buttons": {
      marginBottom: 12,
      "& button .MuiButton-label": {
        display: "flex",
        flexDirection: "column"
      }
    },
    '& video, & img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5
    }
  },
  menu: {
    position: 'absolute',
    right: 24,
    top: 24,
    background: 'transparent'
  },
  container: {
    height: '67%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  start: {
    boxShadow: "none",
    background: "transparent",
    border: "2px solid #000000"
  },
  learn: {
    boxShadow: "none",
    marginLeft: 12,
    background: "#EE7F18",
    color: "#FFFFFF"
  }
}));

const ImageOptions = props => {
  const classes = useStyles();
  const [activeTab, setTab] = useState(0);

  return (
    <Grid item xs={props.expanded ? 12 : 9} className={classes.root}>

      <Box className={classes.container}>
        {activeTab === 0 && <img src={require('./images/banner0.jpg')} alt='banner' />}
        {activeTab === 1 && <img src={require('./images/banner1.jpg')} alt='banner' />}
        {activeTab === 2 && <img src={require('./images/banner2.jpg')} alt='banner' />}
        {activeTab === 3 && <video src={require('../../resources/video/video.mp4')} autoPlay loop muted></video>}
        <Fab className={classes.menu} onClick={() => props.handleBanner()}>
          <Menu fontSize='large' />
        </Fab>
        <Typography variant="h3" className="text-center">
          NEED TO INVENT FUTURE
        </Typography>
        <Typography variant="h5" className="text-center">
          WE MAKING DIFFERENCE TO GREAT THINGS POSSIBLE
        </Typography>
        <Box>
          <Box className="text-center option-buttons">
            <Fab variant="" className={classes.start}>
              START NOW
            </Fab>
            <Fab variant="" className={classes.learn}>
              LEARN NOW
            </Fab>
          </Box>
          <Box className="text-center toggle-buttons">
            <Button variant={`${activeTab === 0 ? 'contained' : ''}`} onClick={() => setTab(0)}>
              <Motorcycle />
              INVENT
          </Button>
            <Button variant={`${activeTab === 1 ? 'contained' : ''}`} onClick={() => setTab(1)}>
              <SingleBed />
              DREAM
          </Button>
            <Button variant={`${activeTab === 2 ? 'contained' : ''}`} onClick={() => setTab(2)}>
              <Android />
              TECH
          </Button>
            <Button variant={`${activeTab === 3 ? 'contained' : ''}`} onClick={() => setTab(3)}>
              <Videocam />
              VIDEO
          </Button>

          </Box>
        </Box>
      </Box>

    </Grid>
  );
};

export default ImageOptions;
