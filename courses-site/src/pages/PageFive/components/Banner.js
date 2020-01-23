import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
        '& img': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.5,
        },
    },
    content: {
        padding: 12,
        background: '#000000',
        width: '100%',
        zIndex: 1,
        opacity: 0.7,
        paddingLeft: 50,
        paddingRight: 50
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#FFFFFF'
    },
    fab: {
        background: 'transparent',
        border: '1px solid #FFFFFF',
        color: '#FFFFFF',
        '&:hover': {
            color: '#000000'
        }
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: 120,
        paddingRight: 120,
        marginTop: 40,
        color: '#FFFFFF',
        '& p': {
            color: '#FFFFFF'
        }
    },
    bottom: {
        marginTop: 24,
        color: '#FFFFFF',
        background: '#000000',
        height: 98
    },

}));

const Banner = () => {
    const classes = useStyles();
    const [banner, setBanner] = useState({header: [], content: [], footer: []});

    useEffect(() => {
      axios.get("/json/courses-banner.json")
           .then(({data}) => setBanner(data));
    }, []);

    return (<><Box className={classes.root}>
        <img src={require('../../../resources/images/banner.jpg')} alt='banner' />
        <Box className={classes.content}>
            <Box className={classes.options}>
              {banner.header.map((item, index) => (
                <Typography component='p' key={index}>{item}</Typography>
              ))}
                <Fab variant='extended' className={classes.fab}>Take Our Exam</Fab>
                <Fab variant='extended' className={classes.fab}>Take Our Placement</Fab>
            </Box>
            <Box className={classes.listContainer}>
              {banner.content.map((row, index) => (
                <List key={index}>
                  {row.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={item.primary}
                            secondary={item.secondary}
                        />
                    </ListItem>
                  ))}
                </List>
              ))}
            </Box>
            <Box className={`${classes.options} ${classes.bottom}`}>
              {banner.footer.map((item, index) => (
                <Typography variant='h3' key={index}>{item}</Typography>
              ))}
            </Box>
        </Box>

    </Box>

    </>);
}

export default Banner;