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

const Testimonials = () => {
  const classes = useStyles();

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("/json/testimonials.json")
         .then(({data}) => setTestimonials(data));
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="h5"> Student Testimonials</Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        {testimonials.map(testimonial => (
        <Grid item xs={6} md={3} key={testimonial.id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={testimonial.img}
                title={testimonial.name}
                className={classes.image}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {testimonial.intro}
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

export default Testimonials;
