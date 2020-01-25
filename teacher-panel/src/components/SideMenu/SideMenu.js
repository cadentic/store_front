import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { Meeting } from "../../resources/svg/meeting";
import { Sales } from "../../resources/svg/sales";
import { Settings } from "../../resources/svg/settings";
import { Tools } from "../../resources/svg/tools";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#1F1E2E",
    border: "1px solid #4D41B3",
    marginBottom: theme.spacing(2),
    padding: 0,
    "& a": {
      textDecoration: "none"
    },
    "& a.selected>div": {
      backgroundColor: "#4D41B3"
    },
    "&.closed": {
      width: 58
    }
  },
  nested: {
    padding: 0,
    alignItems: "stretch",
    color: "#FFFFFF",
    "& .MuiListItemText-root": {
      margin: 0,
      paddingLeft: 11,
      justifyContent: "center",
      display: "flex",
      "&:hover": {
        color: "#3FA2F7"
      }
    }
  },
  listItem: {
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    minHeight: 36,
    alignItems: "stretch",
    border: "1px solid #4D41B3",
    "&:hover": {
      backgroundColor: "#4D41B3"
    }
  },
  menuIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D41B3"
  },
  menuIcon: {
    fill: "#FFFFFF"
  },
  menuTitle: {
    paddingLeft: 11,
    color: "#FFFFFF",
    alignItems: "center"
  },
  expandIcon: {
    fill: "#FFFFFF"
  },
  subMenuBox: {
    backgroundColor: "#4D41B3",
    border: "1px solid #4D41B3",
    width: 57
  }
}));

const SideMenu = () => {
  const classes = useStyles();
  const [menuOpen, openMenu] = React.useState(true);
  const [openMeeting, setOpenMeeting] = React.useState();
  const [openSales, setOpenSales] = React.useState();

  const handleClickMeeting = () => {
    setOpenMeeting(true);
    setOpenSales(false);
  };

  const handleClickSales = () => {
    setOpenSales(true);
    setOpenMeeting(false);
  };

  const changeMenu = () => {
    openMenu(!menuOpen);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={`${classes.root} ${menuOpen ? "open" : "closed"}`}
    >
      <ListItem button className={classes.listItem}>
        <ListItemIcon
          className={classes.menuIconContainer}
          onClick={changeMenu}
        >
          <Menu className={classes.menuIcon} />
        </ListItemIcon>
        {menuOpen && (
          <ListItemText
            primary="Admin Dashboard"
            className={classes.menuTitle}
          />
        )}
      </ListItem>
      <NavLink
        to="/teacher-panel"
        className={`${openMeeting ? "selected" : ""}`}
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          if (match) {
            handleClickMeeting();
          }
        }}
      >
        <ListItem button className={`${classes.listItem}`}>
          <ListItemIcon className={classes.menuIconContainer}>
            <Meeting />
          </ListItemIcon>
          {menuOpen && (
            <>
              <ListItemText
                primary="Go Meeting"
                className={`${classes.menuTitle}`}
              />
              {openMeeting ? (
                <ExpandLess className={classes.expandIcon} />
              ) : (
                <ExpandMore className={classes.expandIcon} />
              )}
            </>
          )}
        </ListItem>
      </NavLink>
      {menuOpen && (
        <Collapse in={openMeeting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} alignItems="center">
              <Box className={classes.subMenuBox}></Box>
              <ListItemText primary="Track Student" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <Box className={classes.subMenuBox}></Box>
              <ListItemText primary="Track Teacher" />
            </ListItem>
          </List>
        </Collapse>
      )}

      <NavLink
        to="/teacher-panel/sales"
        className={`${openSales ? "selected" : ""}`}
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
          if (match) {
            handleClickSales();
          }
        }}
      >
        <ListItem button className={`${classes.listItem}`}>
          <ListItemIcon className={classes.menuIconContainer}>
            <Sales />
          </ListItemIcon>
          {menuOpen && (
            <>
              <ListItemText primary="Sales" className={classes.menuTitle} />
              {openSales ? (
                <ExpandLess className={classes.expandIcon} />
              ) : (
                <ExpandMore className={classes.expandIcon} />
              )}
            </>
          )}
        </ListItem>
      </NavLink>
      {menuOpen && (
        <Collapse in={openSales} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} alignItems="center">
              <Box className={classes.subMenuBox}></Box>
              <ListItemText primary="Total Sales" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <Box className={classes.subMenuBox}></Box>
              <ListItemText primary="Report" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <Box className={classes.subMenuBox}></Box>
              <ListItemText primary="Audit" />
            </ListItem>
          </List>
        </Collapse>
      )}

      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.menuIconContainer}>
          <Settings />
        </ListItemIcon>
        {menuOpen && (
          <ListItemText primary="Settings" className={classes.menuTitle} />
        )}
      </ListItem>
      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.menuIconContainer}>
          <Tools />
        </ListItemIcon>
        {menuOpen && (
          <ListItemText primary="Tools" className={classes.menuTitle} />
        )}
      </ListItem>
    </List>
  );
};

export default SideMenu;
