import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CloudStack from '../../../resources/svg/cloudStack';
import Tasks from '../../../resources/svg/tasks';
import Edit from '../../../resources/svg/Edit';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid #808080'
    },
    title: {
        background: '#FFEED4',
        color: '#C1272D',
        borderBottom: '1px solid #808080'
    },
}));

const getIcon = icon => {
  switch(icon) {
    case "cloud-stack": return <CloudStack />;
    case "tasks": return <Tasks />;
    case "edit": return <Edit/>;
    default: return <CloudStack />;
  }
};

const CoursesList = () => {
    const classes = useStyles();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      axios.get("/json/courses-list.json")
           .then(({data}) => setCourses(data));
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant='h5' align='center'>Courses</Typography>
            </Box>
            <List component="nav" aria-label="main mailbox folders">
              {courses.map(course => (
                <ListItem button>
                    <ListItemIcon>
                      {getIcon(course.icon)}
                    </ListItemIcon>
                    <ListItemText primary={course.text} />
                </ListItem>
              ))}
            </List>
        </Box>);
}

export default CoursesList;