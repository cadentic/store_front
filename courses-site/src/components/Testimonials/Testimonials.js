import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "150px",
    marginRight: "150px",
    marginTop: "70px"
  },
  gridContainer: {
    marginTop: "24px"
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
    objectFit: "none"
  },
  title: {
    textAlign: "center"
  }
}));

const Testimonials = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5"> Student Testimonials</Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/avatar.png")}
                title="Title"
                className={classes.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/avatar.png")}
                title="Title"
                className={classes.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/avatar.png")}
                title="Title"
                className={classes.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/avatar.png")}
                title="Title"
                className={classes.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
