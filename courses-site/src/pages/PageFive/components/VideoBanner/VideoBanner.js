import React, { useState, Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Fab from '@material-ui/core/Fab';
import Video from './Video'
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const videos = [{
    title: 'Go Full Stack With Spring Boot and Angular 7',
    progress: 75
}, {
    title: 'SAP HANA Installation, Operation and Administration',
    progress: 10
}, {
    title: 'React for begginers',
    progress: 90
}, {
    title: 'NoSql Databases',
    progress: 50
}, {
    title: 'Advances CSS3',
    progress: 32
}]

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 150,
        paddingRight: 150,
        display: 'flex',
        marginTop: 12,
        position: 'relative'
    },
    icon: {
        marginTop: 'auto',
        marginBottom: 'auto',
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)'
    },
    back: {
        left: 123,
    },
    go: {
        right: 123,
    }
}));



const VideoBanner = () => {
    const classes = useStyles();
    const [activeCourses, setActive] = useState([0, 1]);

    return (<Box className={classes.root}>
        {videos.map((item, index) => {
            if (activeCourses.indexOf(index) !== -1) {
                return <Fragment key={index}>
                    {
                        activeCourses[0] > 0 &&
                        index === activeCourses[0] &&
                        <Fab className={`${classes.icon} ${classes.back}`} onClick={() => setActive([activeCourses[0] - 1, activeCourses[1] - 1])}>
                            <ChevronLeft fontSize='large' />
                        </Fab>
                    }
                    <Video title={item.title} progress={item.progress} />
                    {
                        activeCourses[1] < videos.length - 1 &&
                        index === activeCourses[1] &&
                        <Fab className={`${classes.icon} ${classes.go}`} onClick={() => setActive([activeCourses[0] + 1, activeCourses[1] + 1])}>
                            <ChevronRight fontSize='large' />
                        </Fab>
                    }
                </Fragment>
            }
            return null
        })}
    </Box>);
}

export default VideoBanner;