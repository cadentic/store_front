import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import TopMenu from './components/TopMenu';
import Banner from './components/Banner';
import VideoBanner from './components/VideoBanner/VideoBanner'
import CourseTitle from '../PageTwo/components/CourseTitle'
import CourseTable from '../PageTwo/components/CourseTable'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Edit from '../../resources/svg/Edit';
import axios from "axios";


const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: "150px",
        paddingRight: "150px",
    },
    courses: {
        marginTop: 14
    },
    takeContainer: {
        marginTop: 14,
        display: 'flex',
        justifyContent: 'space-between'
    },
    list: {
        width: '50%',
        marginLeft: 12,
        border: '1px solid #CCCCCC'
    }
}));

const PageFive = () => {
    const classes = useStyles();
    const [coursesSections, setCoursesSections] = useState([]);
    const [coursesListSelect, setCoursesListSelect] = useState([]);

    useEffect(() => {
      axios.get("/json/courses-sections.json")
           .then(({data}) => setCoursesSections(data));
      axios.get("/json/courses-list-select.json")
           .then(({data}) => setCoursesListSelect(data));
    }, []);

    return (
        <Box className={classes.root}>
            <TopMenu />
            <Banner />
            <VideoBanner />
            <Grid container spacing={3} className={classes.courses}>
                {coursesSections.map(course => (
                <>
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
                </>
                ))}
            </Grid>
            <Box className={classes.takeContainer}>
                <Button color='primary' variant='contained'>Take Your Exam</Button>
                <Button color='primary' variant='contained'>View All</Button>
            </Box>
            <Box className={classes.takeContainer}>
              {coursesListSelect.map(course => (
                <List  className={classes.list} component="nav" aria-label="main mailbox folders">
                  {course.map(item => (
                    <ListItem button>
                        <ListItemIcon>
                        <Edit />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              ))}
            </Box>
        </Box>
    );
}

export default PageFive;