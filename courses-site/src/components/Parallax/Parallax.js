import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PurpleSquare from "../../resources/svg/PurpleSquare"
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    height: 700,
    background: "#212121",
    position: "relative",
  },
  p1: {
    width: 250,
    height: 150
  },
  p2: {
    width: 300,
    height: 250,
  },
  p3: {
    width: 400,
    height: 300
  },
  p4: {
    width: 350,
    height: 300
  },
  overview: {
    color: '#FFFFFF'
  },
  typo: {
    marginRight: 150,
    marginTop: 24,
  },
  list: {
    marginTop: 50,
    '& .MuiListItemText-secondary': {
      color: '#FFFFFF'
    },
    '& li': {
      marginTop: 30
    }
  }
}));

const Parallaxx = () => {
  const classes = useStyles();
  return (
    <ParallaxProvider>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12} md={8}>
          <Box className={classes.root} >
            <Parallax x={[200, 100]} y={[0, 20]} className={classes.p1}>
              <img
                src={require("../../resources/images/p1.png")}
                width="250"
                height="150"
                alt="parallax"
              />
            </Parallax>
            <Parallax x={[120, 200]} y={[-50, -10]} className={classes.p2}>
              <img
                src={require("../../resources/images/p2.png")}
                width={300}
                height={250}
                alt="parallax"
              />
            </Parallax>
            <Parallax x={[200, 130]} y={[0, -100]} className={classes.p3}>
              <img
                src={require("../../resources/images/p3.png")}
                width="400"
                height="300"
                alt="parallax"

              />
            </Parallax>
            <Parallax x={[100, 150]} y={[-150, -85]} className={classes.p4}>
              <img
                src={require("../../resources/images/p4.png")}
                width="350"
                height="300"
                alt="parallax"

              />
            </Parallax>
          </Box>

        </Grid>
        <Grid item xs={12} md={4} className={classes.overview}>
          <Box>
            <Typography className={classes.typo} variant='h3'>Lorem ipsum dolor sit amet, consectetuer </Typography>
            <Typography className={classes.typo} component='p'>Lorem ipsum dolor sit amet, consectetuer  </Typography>
            <Typography className={classes.typo} component='p'>Lorem ipsum dolor sit amet, consectetuer  </Typography>
            <List className={classes.list}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar className="avatar">
                  <PurpleSquare />
                </ListItemAvatar>
                <ListItemText
                  primary="Lorem ipsum dolor sit amet, consectetuer"
                  secondary="Lorem ipsum dolor sit amet, consectetuer ."
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemAvatar className="avatar">
                  <PurpleSquare />
                </ListItemAvatar>
                <ListItemText
                  primary="Lorem ipsum dolor sit amet, consectetuer"
                  secondary="Lorem ipsum dolor sit amet, consectetuer ."
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemAvatar className="avatar">
                  <PurpleSquare />
                </ListItemAvatar>
                <ListItemText
                  primary="Lorem ipsum dolor sit amet, consectetuer"
                  secondary="Lorem ipsum dolor sit amet, consectetuer ."
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>




    </ParallaxProvider >
  );
};

export default Parallaxx;
