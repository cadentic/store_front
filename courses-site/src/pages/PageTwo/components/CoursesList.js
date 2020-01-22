import React from 'react';
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

const CoursesList = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant='h5' align='center'>Courses</Typography>
            </Box>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <CloudStack />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Tasks />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CloudStack />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Tasks />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Edit />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CloudStack />
                    </ListItemIcon>
                    <ListItemText primary="Lorem ipsum lorum" />
                </ListItem>
            </List>
        </Box>);
}

export default CoursesList;