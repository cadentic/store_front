import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import CoursesList from './components/CoursesList';
import CourseTile from './components/CourseTile'
import CourseTitle from './components/CourseTitle'
import CourseTable from './components/CourseTable'
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: "150px",
        paddingRight: "150px",
    },
    courseListContainer: {
        display: 'flex',
        flexWrap: 'wrap',

    }
}));

const PageTwo = () => {
    const classes = useStyles();
    const [coursesTiles, setCoursesTiles] = useState([]);
    const [coursesSections, setCoursesSections] = useState([]);

    useEffect(() => {
      axios.get("/json/courses-tiles.json")
           .then(({data}) => setCoursesTiles(data));
      axios.get("/json/courses-sections.json")
           .then(({data}) => setCoursesSections(data));
    }, []);

    return (
        <Box className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <CoursesList />
                </Grid>
                <Grid item xs={10} className={classes.courseListContainer}>
                  {coursesTiles.map(course => (
                    <CourseTile
                      key={course.id}
                      fillCorner={course.cornerColor}
                      background={course.background}
                      img={course.img}
                      title={course.title} />
                  ))}
                </Grid>
                {coursesSections.map(course => (
                <Fragment key={course.id}>
                <Grid item xs={3}>
                    <CourseTitle
                      background={course.courseTitle.background}
                      src={course.courseTitle.img}
                      price={course.courseTitle.price}
                      discount={course.courseTitle.discount}
                      description={course.courseTitle.description} />
                </Grid>
                <Grid item xs={9}>
                    <CourseTable contents={course.courseTable} />
                </Grid>
                </Fragment>
                ))}
            </Grid>
        </Box>);
}

export default PageTwo;