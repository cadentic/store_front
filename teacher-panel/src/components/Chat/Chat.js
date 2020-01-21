import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Search } from "@material-ui/icons";
import { Avatar as AvatarIcon } from "../../resources/svg/avatar";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "rgba(0,0,0,0.39)",
    padding: 0
  },
  header: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    paddingTop: 10,
    paddingBottom: 10,
    "& span": {
      fontSize: "0.875rem"
    }
  },
  inline: {
    display: "inline"
  },
  listItem: {
    wordBreak: "break-all",
    "&:hover": {
      backgroundColor: "#3FA2F7"
    },
    "& .topic": {
      color: "#FFFFFF"
    },
    "& .message": {
      color: "#808080"
    }
  },
  searchBoxContainet: {
    backgroundColor: "rgba(0,0,0,0.39)"
  },
  input: {
    fontSize: "12px",
    width: "100%"
  },
  searchBox: {
    background: "#B3B3B3",
    border: "1px solid #FFFFFF",
    height: "22.5px",
    display: "flex",
    paddingLeft: "12px",
    paddingRight: "12px",

    "& button": {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 24,
      paddingLeft: 0
    },
    "& svg": {
      height: "20px",
      width: "20px"
    },
    "& button:hover": {
      background: "#B3B3B3"
    }
  }
}));

const Chat = ({ handleListItem }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState();
  const [chatData, setChatData] = React.useState();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleListItem(index);
  };
  
  useEffect(() => {
    axios
      .get(
        "/json/chat.json"
      )
      .then(({ data }) => {
        setChatData(data);
      });
  }, []);

  return (
    <>
      <Box className={classes.header}>
        <Box component="span" className="p-l-16">
          Let's talk
        </Box>
      </Box>
      <Box className={`${classes.searchBoxContainet} p-a-16`}>
        <Paper className={`p-l-16 ${classes.searchBox}`}>
          <IconButton
            className={classes.iconButton}
            disableRipple={true}
            aria-label="search"
          >
            <Search />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="People, groupd &amp; messages"
          />
        </Paper>
      </Box>
      <List className={classes.root}>
        {chatData && chatData.map((value, index) => {
          return(
            <React.Fragment key={value.id}>
              <ListItem
                button
                alignItems="flex-start"
                selected={selectedIndex === index}
                className={classes.listItem}
                onClick={event => handleListItemClick(event, index)}
              >
                <ListItemAvatar>
                  <AvatarIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={value.title}
                  className="topic"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={`message ${classes.inline}`}
                        color="textPrimary"
                      >
                        {value.content}
                      </Typography>{" "}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default Chat;
