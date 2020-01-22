import React, { useState, useEffect } from "react";
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
import axios from "axios";

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
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/json/courses-demands.json")
         .then(({data}) => setCourses(data));
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {" "}
        In Demand Courses
      </Typography>
      <Grid container spacing={3} className={classes.gridCointainer}>
        {courses.map(course => (
        <Grid item xs={6} md={3} key={course.id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={course.img}
                title={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  By: {course.instructor}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.price}
                >
                  {course.price}$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <BorderLinearProgress
                className={classes.cardActions}
                variant="determinate"
                color="secondary"
                value={course.progress}
              />
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Demand;
