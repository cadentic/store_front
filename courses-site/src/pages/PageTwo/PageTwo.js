import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import CoursesList from './components/CoursesList';
import CourseTile from './components/CourseTile'
import CourseTitle from './components/CourseTitle'
import CourseTable from './components/CourseTable'

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
    return (
        <Box className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <CoursesList />
                </Grid>
                <Grid item xs={10} className={classes.courseListContainer}>
                    <CourseTile fillCorner='#4D41B3' background='#22B573' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#22B573' background='#B3DAFB' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#C1272D' background='#22B573' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#29ABE2' background='#FBB03B' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#C1272D' background='#00A99D' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#22B573' background='#D4145A' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#C1272D' background='#00A99D' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#FBB03B' background='#C1272D' src='../../../resources/images/courseImage.png' />
                    <CourseTile fillCorner='#22B573' background='#4D41B3' src='../../../resources/images/courseImage.png' />
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