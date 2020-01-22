import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    return (<><Box className={classes.root}>
        <img src={require('../../../resources/images/banner.jpg')} alt='banner' />
        <Box className={classes.content}>
            <Box className={classes.options}>
                <Typography component='p'>Lorem ipsum</Typography>
                <Typography component='p'>Lorem ipsum</Typography>
                <Typography component='p'>Lorem ipsum</Typography>
                <Typography component='p'>Lorem ipsum</Typography>
                <Typography component='p'>Lorem ipsum</Typography>
                <Fab variant='' className={classes.fab}>Take Our Exam</Fab>
                <Fab variant='' className={classes.fab}>Take Our Placement</Fab>
            </Box>
            <Box className={classes.listContainer}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Lorem Ipsum"
                            secondary='Lorem Ipsum'
                        />
                    </ListItem>
                </List>
            </Box>
            <Box className={`${classes.options} ${classes.bottom}`}>
                <Typography variant='h3'>Lorem ipsum</Typography>
                <Typography variant='h3'>Lorem ipsum</Typography>
                <Typography variant='h3'>Lorem ipsum</Typography>
                <Typography variant='h3'>Lorem ipsum</Typography>
                <Typography variant='h3'>Lorem ipsum</Typography>
            </Box>
        </Box>

    </Box>

    </>);
}

export default Banner;