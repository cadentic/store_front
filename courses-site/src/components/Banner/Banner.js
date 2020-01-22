import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Square from "../../resources/svg/Square";
import Agenda from "../../resources/svg/Agenda";
import ImageOptions from "./ImageOptions";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 600,
    display: "flex",
    justifyContent: "stretch"
  },
  container: {
    "& img": {
      width: "100%"
    }
  },
  events: {
    paddingTop: 0,
    paddingLeft: 24,
    paddingRight: 24,
    borderLeft: "1px solid #666666",
    borderBottom: "1px solid #666666",
    "& .events-title": {
      fontSize: 21,
      color: "#297FCA",
      background:
        "linear-gradient(273deg, rgba(2,0,36,1) 0%, rgba(255,231,193,1) 0%, rgba(255,243,223,1) 86%, rgba(255,255,255,1) 100%)",
      height: 48,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        marginRight: 12
      }
    },
    "& .avatar": {
      display: "flex",
      justifyContent: "flex-end",
      marginRight: 10,
      marginTop: 12
    }
  },
  list: {
    height: 336,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    '& li': {
      flexGrow: 1
    }
  }
}));

const Banner = () => {
  const classes = useStyles();
  const [expanded, setBanner] = React.useState(true);
  const [items, setItems] = useState([]);
  const handleBanner = () => {
    setBanner(!expanded)
  }

  useEffect(() => {
    axios.get("/json/banner-items.json")
         .then(({data}) => setItems(data));
  }, []);

  return (
    <Box className={classes.root}>
      <Grid container spacing={0} className={classes.container}>
        <ImageOptions expanded={expanded} handleBanner={() => handleBanner()} />
        {!expanded && <Grid item xs={3} className={classes.events}>
          <Box className="events-title">
            <Agenda />
            Events &amp; Promotions
          </Box>
          <Box>
            <List className={classes.list}>
              {items.map(item => (
              <ListItem alignItems="flex-start">
                <ListItemAvatar className="avatar">
                  <Square />
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem>
              ))}
            </List>
          </Box>
        </Grid>}
      </Grid>
    </Box>
  );
};

export default Banner;
