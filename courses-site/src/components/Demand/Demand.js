import React from "react";
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "150px",
    marginRight: "150px",
    marginTop: "70px",
    borderTop: "1px solid #013B4D"
  },
  title: {
    paddingTop: 12
  },
  gridCointainer: {
    marginTop: 24
  },
  price: {
    textAlign: "right"
  },
  cardActions: {
    width: "100%"
  }
}));

const Demand = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {" "}
        In Demand Courses
      </Typography>
      <Grid container spacing={3} className={classes.gridCointainer}>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={require("../../resources/images/courseImage.png")}
                title="Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Course Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={50}
              />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demand;
