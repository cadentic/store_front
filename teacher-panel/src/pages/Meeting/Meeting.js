import React, { useEffect } from "react";
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
import StudentGraph from "./graphs/StudentGraph";
import TeacherGraph from "./graphs/TeacherGraph";
import ManagementTable from "./tables/ManagementTable";
import CourseManagement from "./tables/CourseManagement";
import { SideOne } from "../../resources/svg/sideOne";
import { SideTwo } from "../../resources/svg/sideTwo";
import { SideThree } from "../../resources/svg/sideThree";
import { SideFour } from "../../resources/svg/sideFour";
import SettingsWhite from "../../resources/svg/settingsWhite";
import CloudUpload from "@material-ui/icons/CloudUpload";
import axios from 'axios';

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
  table: {},
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
  },
  upload: {
    fill: "#FFFFFF",
    marginBottom: -2,
    marginRight: 8
  }
}));

const Meeting = () => {
  const classes = useStyles();
  const [attendance, setAttendance] = React.useState(true);
  const [data, setData] = React.useState();

  useEffect(() => {
    axios
      .get(
        "/json/rightSidebar.json"
      )
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  const handleAttendance = () => {
    setAttendance(!attendance);
  };

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
                value={attendance}
                exclusive
                onChange={handleAttendance}
                className={classes.toggle}
              >
                <ToggleButton value={true}>Attendance</ToggleButton>
                <ToggleButton value={false}>Feedback</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <StudentGraph attendance={attendance}/>
          </Paper>
        </Grid>

        <Grid item xs className={classes.side}>
          <List className={classes.sideList}>
            {data && data.map((value, index) => {
              return(
                <ListItem key={value.id}>
                  <ListItemAvatar>
                    <Avatar>
                      {value.avatar === "one" && <SideOne />}
                      {value.avatar === "two" && <SideTwo />}
                      {value.avatar === "three" && <SideThree />}
                      {value.avatar === "four" && <SideFour />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.primary}
                    secondary={value.secondary}
                  />
                </ListItem>
              );
            })}
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
                value={attendance}
                exclusive
                onChange={handleAttendance}
                className={classes.toggle}
              >
                <ToggleButton value={true}>Attendance</ToggleButton>
                <ToggleButton value={false}>Feedback</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <TeacherGraph attendance={attendance} />
          </Paper>
        </Grid>
        <Grid item xs className={classes.side}>
          <List className={classes.sideList}>
            {data && data.map((value, index) => {
              return(
                <ListItem key={value.id}>
                  <ListItemAvatar>
                    <Avatar>
                      {value.avatar === "one" && <SideOne />}
                      {value.avatar === "two" && <SideTwo />}
                      {value.avatar === "three" && <SideThree />}
                      {value.avatar === "four" && <SideFour />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.primary}
                    secondary={value.secondary}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={`${classes.paper}`}>
            <Box className={`${classes.graphHeader} ${classes.table}`}>
              <Box component="span" className={`${classes.graphTitle}`}>
                Management Table
              </Box>
              <SettingsWhite />
            </Box>
            <CourseManagement />
          </Paper>
        </Grid>
        <Grid item xs className={classes.side}>
          <List className={classes.sideList}>
            {data && data.map((value, index) => {
              return(
                <ListItem key={value.id}>
                  <ListItemAvatar>
                    <Avatar>
                      {value.avatar === "one" && <SideOne />}
                      {value.avatar === "two" && <SideTwo />}
                      {value.avatar === "three" && <SideThree />}
                      {value.avatar === "four" && <SideFour />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.primary}
                    secondary={value.secondary}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={`${classes.paper}`}>
            <Box className={`${classes.graphHeader} ${classes.table}`}>
              <Box component="span" className={`${classes.graphTitle}`}>
                Course Management
              </Box>
              <Box>
                <CloudUpload className={classes.upload} />
                <SettingsWhite />
              </Box>
            </Box>
            <ManagementTable />
          </Paper>
        </Grid>
        <Grid item xs className={classes.side}>
          <List className={classes.sideList}>
            {data && data.map((value, index) => {
              return(
                <ListItem key={value.id}>
                  <ListItemAvatar>
                    <Avatar>
                      {value.avatar === "one" && <SideOne />}
                      {value.avatar === "two" && <SideTwo />}
                      {value.avatar === "three" && <SideThree />}
                      {value.avatar === "four" && <SideFour />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.primary}
                    secondary={value.secondary}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Meeting;
