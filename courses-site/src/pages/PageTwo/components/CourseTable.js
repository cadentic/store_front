import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import CloudDownLoad from '@material-ui/icons/CloudDownload'
import PlayCircle from '@material-ui/icons/PlayCircleFilled'

const useStyles = makeStyles(theme => ({
    root: {

    },
    section: {
        background: 'linear-gradient(100deg, rgba(2,0,36,1) 0%, rgba(255,231,193,1) 0%, rgba(255,243,223,1) 80%, rgba(255,255,255,1) 100%)'
    },
    tableIcon: {
        fill: '#F7931E',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    startCell: {
        paddingLeft: 40,
        position: 'relative'
    },
    play: {
        fill: '#D7F0FC',
        marginRight: 12,
        cursor: 'pointer',
        position: 'absolute',
        left: 5,
        bottom: 18
    }
}));

const CourseTable = props => {
    const classes = useStyles();
    return (<Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Course Content</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Add to Cart</TableCell>
                <TableCell align="right">Download</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.contents.map((content, index) => (
              <Fragment key={index}>
            <TableRow className={classes.relative}>
                <TableCell scope="row" colSpan={4} className={classes.section}>+ {content.title}</TableCell>
            </TableRow>
              {content.items.map((item, index) => (
            <TableRow key={index}>
                <TableCell component="th" scope="row" className={classes.startCell}><PlayCircle className={classes.play} />{item.content}</TableCell>
                <TableCell align="right">{item.duration}</TableCell>
                <TableCell align="right"><AddShoppingCart className={classes.tableIcon} /></TableCell>
                <TableCell align="right"><CloudDownLoad className={classes.tableIcon} /></TableCell>
            </TableRow>
              ))}
                </Fragment>
            ))}
        </TableBody>
    </Table>);
}

export default CourseTable;