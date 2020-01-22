import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Paper from '@material-ui/core/Paper';
import Corner from '../../../resources/svg/Corner';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: 400,
        height: 120,
        marginLeft: 14,
        marginRight: 14,
        transition: 'all 0.5s linear',
        '& img': {
            maxHeight: '100%'
        },
        '& h5': {
            color: '#FFFFFF'
        },
        '&:hover': {
            boxShadow: '6px 3px 8px #888888',
        }
    },
    buy: {
        background: '#F9B61F',
        border: '1px solid #ED1C24',
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translate(34%, 0)',
        height: 30,
    },
    corner: {
        position: 'absolute',
        right: 0,
        bottom: -1
    },
    title: {
        position: 'absolute',
        top: 5,
        right: 50,
        color: '#FFFFFF',
    },
    price: {
        position: 'absolute',
        top: 40,
        right: 91,
    }
}));

const CourseTile = props => {
    const classes = useStyles();
    const { fillCorner, background } = props

    return (
        <Paper className={classes.root} style={{ background: background }}>
            <img src={require('../../../resources/images/courseImage.png')} alt='course' />
            <Typography variant='h5' className={classes.title}>Course Title</Typography>
            <Typography variant='h5' className={classes.price}>$ 500</Typography>
            <Fab variant="" className={classes.buy}>
                Buy Now
            </Fab>
            <Corner fill={fillCorner} className={classes.corner} />
        </Paper>);
}

export default CourseTile;