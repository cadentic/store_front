import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '5px 5px 8px 5px',
        '& img': {
            width: '100%'
        }
    },
    title: {
        color: '#FFFFFF',
        marginLeft: 30
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 24
    },
    price: {
        color: '#FCEE21',
        marginLeft: 30
    },
    discount: {
        color: '#FFFFFF',
        marginLeft: 24
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 24
    },
    buy: {
        background: '#F7931E',
        border: '1px solid #F15A24',
        color: '#FFFFFF'
    },
    add: {
        background: '#F15A24',
        border: '1px solid #ED1C24',
        color: '#FFFFFF',
        marginLeft: 24,
    },
    description: {
        padding: '14px 14px 0 14px'
    }
}));

const CourseTitle = props => {
    const { background } = props
    const classes = useStyles();
    return (<><Box className={classes.root} style={{ background: background }}>
        <img src={require('../../../resources/images/p5.png')} alt='course-title' />
        <Typography className={classes.title} variant='h3'>Course Title</Typography>
        <Box className={classes.priceContainer}>
            <Typography className={classes.price} variant='h5'>$ 200</Typography>
            <Typography className={classes.discount}>-11%</Typography>
        </Box>
        <Box className={classes.buttonsContainer}>
            <Button variant='contained' className={classes.buy}>Buy Now</Button>
            <Button variant='contained' className={classes.add}>Add to Cart</Button>
        </Box>
    </Box>
        <Typography component='p' className={classes.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
</Typography></>);
}

export default CourseTitle;