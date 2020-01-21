import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Woman from "../../../resources/svg/woman";
import Man from "../../../resources/svg/man";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import Box from "@material-ui/core/Box";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#282A3C",
    boxShadow: "none",
    width: "100%",
    height: "100%"
  },
  graphHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  graphTitle: {
    color: "#3FA2F7",
    fontSize: 18
  },
  table: {
    minWidth: 650,
    "& thead th": {
      color: "#3FA2F7"
    },
    "& tbody td": {
      color: "#FFFFFF",
      "& svg": {
        marginBottom: -8
      }
    }
  },
  progressCell: {
    "& .progress-bar-component": {
      display: "inline-block",
      width: "calc(100% - 31px)"
    }
  }
}));

const CourseManagement = () => {
  const classes = useStyles();
  const [tableData, setTableData] = React.useState();

  useEffect(() => {
    axios
      .get(
        "/json/courseManagementData.json"
      )
      .then(({ data }) => {
        setTableData(data);
      });
  }, []);
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableData && tableData.header.map((value, index) => {
            return(
              <TableCell key={index} align={value.align}>{value.title}</TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData && tableData.body.map((value, index) => {
          return(
            <TableRow key={value.id}>
              <TableCell scope="row">
                { value.gender === "woman" && <Woman /> }
                { value.gender === "man" && <Man /> }
                { value.name }
              </TableCell>
              <TableCell align={value.align}>{value.jobTitle}</TableCell>
              <TableCell align={value.align} className={classes.progressCell}>
                <Box component="span">{value.progress}%</Box> <ProgressBar value={value.progress} />
              </TableCell>
              <TableCell align="right">{value.salary}</TableCell>
              <TableCell align={value.align}></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CourseManagement;
