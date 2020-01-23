import React from 'react';
import { makeStyles, withStyles, lighten } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress";
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Close from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Dialog from '@material-ui/core/Dialog';
import { Player } from 'video-react';

const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten("#808080", 0.5),
        borderRadius: 20,
    },
    bar: {
        borderRadius: 20,
        backgroundColor: "#0071BC"
    }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 10,
        display: 'flex',
        padding: '12px 65px 12px 12px',
        background: '#505763',
        color: '#FFFFFF',
        width: '100%'
    },
    play: {
        width: 150,
        height: 80,
        position: 'relative',
        marginRight: 12
    },
    icon: {
        margin: 'auto',
        fill: '#FFFFFF'
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
    },
    modal: {
        position: 'relative',
        '& [role=dialog]': {
            width: 600
        }
    },
    close: {
        position: 'absolute',
        right: 5,
        top: 5
    }

}));

const Video = props => {
    const { title, progress } = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<><Paper className={classes.root} onClick={handleOpen}>
        <Button className={classes.play}>
            <PlayCircleOutline className={classes.icon} fontSize="large" />
        </Button>
        <Box className={classes.rightContainer}>
            <Typography component='p'>{title}</Typography>
            <BorderLinearProgress
                variant="determinate"
                color="secondary"
                value={progress}
            />
            <Button className={classes.playButton} variant="contained" color='primary'>Continue Learning</Button>
        </Box>
    </Paper>

        <Dialog
            className={classes.modal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <Player src={props.src} autoPlay aspectRatio='16:9' />
            <Fab className={classes.close} onClick={handleClose}>
                <Close />
            </Fab>
        </Dialog>

    </>);
}

export default Video;