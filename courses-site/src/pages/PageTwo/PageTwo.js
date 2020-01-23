import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
      axios.get("/json/courses-tiles.json")
           .then(({data}) => setCoursesTiles(data));
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
                <Grid item xs={3}>
                    <CourseTitle background='#C1272D' src='../../../resources/images/p5.png' />
                </Grid>
                <Grid item xs={9}>
                    <CourseTable />
                </Grid>
                <Grid item xs={3}>
                    <CourseTitle background='#22B573' src='../../../resources/images/p5.png' />
                </Grid>
                <Grid item xs={9}>
                    <CourseTable />
                </Grid>
            </Grid>
        </Box>);
}

export default PageTwo;