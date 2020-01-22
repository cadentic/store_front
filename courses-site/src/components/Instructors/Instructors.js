import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";

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

const Instructors = () => {
  const classes = useStyles();
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios.get("/json/instructors.json")
         .then(({data}) => setInstructors(data));
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="h5"> Meet our Instructors</Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        {instructors.map(instructor => (
        <Grid item xs={6} md={3} key={instructor.id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={instructor.img}
                title={instructor.name}
                className={classes.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {instructor.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {instructor.intro}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Instructors;
