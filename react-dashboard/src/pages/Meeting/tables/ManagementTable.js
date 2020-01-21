import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import Box from "@material-ui/core/Box";
import CloudUpload from "@material-ui/icons/CloudUpload";
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
        marginBottom: -6,
        marginLeft: 8
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

const ManagementTable = () => {
  const classes = useStyles();
  const [tableData, setTableData] = React.useState();

  useEffect(() => {
    axios
      .get(
        "/json/managementData.json"
      )
      .then(({ data }) => {
        setTableData(data);
      });
  }, []);
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Course title</TableCell>
          <TableCell align="left">Course Duration</TableCell>
          <TableCell align="left">Course Fee</TableCell>
          <TableCell align="left">Taken slot</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData && tableData.body.map((value, index) => {
          return(
            <TableRow key={value.id}>
              <TableCell scope="row">
                {value.title} <CloudUpload className={classes.upload} />
              </TableCell>
              <TableCell align="left">{value.duration}</TableCell>
    
              <TableCell align="left">{value.fee}</TableCell>
              <TableCell align="left" className={classes.progressCell}>
                <Box component="span">{value.slot}%</Box> <ProgressBar value={value.slot} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ManagementTable;
