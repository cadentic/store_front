import React from 'react';
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
    return (
        <Box className={classes.root}>
            <TopMenu />
            <Banner />
            <VideoBanner />
            <Grid container spacing={3} className={classes.courses}>
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
            <Box className={classes.takeContainer}>
                <Button color='primary' variant='contained'>Take Your Exam</Button>
                <Button color='primary' variant='contained'>View All</Button>
            </Box>
            <Box className={classes.takeContainer}>
                <List  className={classes.list} component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                        <Edit />
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
                            <Edit />
                        </ListItemIcon>
                        <ListItemText primary="Lorem ipsum lorum" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Edit />
                        </ListItemIcon>
                        <ListItemText primary="Lorem ipsum lorum" />
                    </ListItem>
                </List>

                <List className={classes.list} component="nav" aria-label="main mailbox folders">
                <ListItem button>
                        <ListItemIcon>
                        <Edit />
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
                            <Edit />
                        </ListItemIcon>
                        <ListItemText primary="Lorem ipsum lorum" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Edit />
                        </ListItemIcon>
                        <ListItemText primary="Lorem ipsum lorum" />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default PageFive;