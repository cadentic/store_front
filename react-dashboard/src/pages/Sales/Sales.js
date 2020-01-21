import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TotalSalesOne from "./graphs/TotalSalesOne";
import TotalSalesTwo from "./graphs/TotalSalesTwo";
import { SideOne } from "../../resources/svg/sideOne";
import { SideTwo } from "../../resources/svg/sideTwo";
import { SideThree } from "../../resources/svg/sideThree";
import { SideFour } from "../../resources/svg/sideFour";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#282A3C",
    boxShadow: "none",
    width: "100%",
    height: "100%",
    borderRadius: 0
  },
  graphHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  graphTitle: {
    color: "#3FA2F7",
    fontSize: 18
  },
  toggle: {
    height: 18,

    "& button": {
      height: 18,
      fontSize: 10,
      border: "1px solid #3FA2F7",
      backgroundColor: "#282A3C",
      color: "#FFFFFF",
      "&.Mui-selected": {
        color: "#FFFFFF",
        backgroundColor: "#3FA2F7"
      }
    }
  },
  side: {
    display: "flex"
  },
  sideList: {
    display: "flex",
    flexDirection: "column",
    color: "#FFFFFF",
    padding: 0,
    width: "100%",
    "& p": {
      color: "#FFFFFF"
    },
    "& li": {
      flexGrow: 1,
      backgroundColor: "#282A3C",
      "&:not(:last-child)": {
        marginBottom: 20
      }
    }
  }
}));

const getAvatar = avatar => {
    switch(avatar) {
        case "one": return <SideOne />;
        case "two": return <SideTwo />;
        case "three": return <SideThree />;
        case "four": return <SideFour />;
    }

    // used as default
    return <SideOne />
};

const Sales = () => {
  const classes = useStyles();
  const [type, setType] = useState("server");
  const [typetwo, setTypetwo] = useState("server");
  const [rightSidebarItems, setRightSidebarItems] = useState([]);
  const [rightSidebarAttendanceItems, setRightSidebarAttendanceItems] = useState([]);

  const handleTotalSalesOne = (e, value) => {
    setType(value);
  };

  const handleTotalSalestwo = (e, value) => {
    setTypetwo(value);
  };

  useEffect(() => {
    axios.get("/json/rightSidebarSales.json")
         .then(({data}) => setRightSidebarItems(data));
    axios.get("/json/rightSidebarSalesAttendance.json")
         .then(({data}) => setRightSidebarAttendanceItems(data));
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={`${classes.paper}`}>
            <Box className={classes.graphHeader}>
              <Box>
                <Box component="span" className={classes.graphTitle}>
                  Track Students
                </Box>
              </Box>
              <ToggleButtonGroup
                value={type}
                exclusive
                onChange={handleTotalSalesOne}
                className={classes.toggle}
              >
                <ToggleButton value="server">Server</ToggleButton>
                <ToggleButton value="domain">Domain</ToggleButton>
                <ToggleButton value="email">Email</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <TotalSalesOne type={type} />
          </Paper>
        </Grid>
        <Grid item xs className={classes.side}>
          <List className={classes.sideList}>
              {rightSidebarItems.map(item => (
                  <ListItem key={item.id}>
                      <ListItemAvatar>
                          <Avatar>
                              {getAvatar(item.avatar)}
                          </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
              ))}
          </List>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={`${classes.paper}`}>
            <Box className={classes.graphHeader}>
              <Box>
                <Box component="span" className={classes.graphTitle}>
                  Track Teacher
                </Box>
              </Box>
              <ToggleButtonGroup
                value={typetwo}
                exclusive
                onChange={handleTotalSalestwo}
                className={classes.toggle}
              >
                <ToggleButton value="server">Server</ToggleButton>
                <ToggleButton value="domain">Domain</ToggleButton>
                <ToggleButton value="email">Email</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <TotalSalesTwo type={typetwo} />
          </Paper>
        </Grid>
        <Grid item xs className={classes.side}>
          <List className={classes.sideList}>
              {rightSidebarAttendanceItems.map(item => (
                  <ListItem key={item.id}>
                      <ListItemAvatar>
                          <Avatar>
                              {getAvatar(item.avatar)}
                          </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItem>
              ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Sales;
