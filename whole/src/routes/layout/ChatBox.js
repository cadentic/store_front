import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Box from "@material-ui/core/Box";
import { Avatar as AvatarIcon } from "../../svg/avatar";
import InputBase from "@material-ui/core/InputBase";
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#dedede",
    padding: 0
  },

  container:{
    position: "fixed",
    right: "20px",
    bottom: "20px",
    zIndex: 30,
    width: "18%" 
  },

  textarea: {
    backgroundColor: "#757272",
    padding: 10
  },

  header: {
    backgroundColor: "#757272",
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
    "& .topic": {
      color: "#FFFFFF",
      fontSize: "16px"
    },
    "& .message": {
      color: "#808080"
    }
  },
 
  input: {
    fontSize: "14px",
    width: "100%",
    color: "#fff"
  },

  chatBox: {
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
      height: "20x",
      width: "20x"
    }
  },

  chatBoxContainet: {
    backgroundColor: "rgba(0,0,0,0.39)"
  },

  clearIcon: {
   position: "absolute",
   right: 0,
   top: 0,
   padding: "8px"
  },

  content: {
    overflow: "scroll",
    maxHeight: "250px",
    overflowX: "hidden"
  },

  receiver: {
    paddingLeft: 10
  }
}));

const ChatBox = ({ handleChatBox, chatContent }) => {
  const classes = useStyles();
  const handleChatBoxClick = (event, index) => {
    handleChatBox(index);
  };

  return (
    <div className={classes.container}>
      <Box className={classes.header}>
        <Box component="span" className="p-l-16">
          <div className={classes.receiver}>
            Cadentic F
          </div>
        </Box>
        <IconButton
            className={classes.clearIcon}
            disableRipple={true}
            aria-label="search"
          >
          <ClearIcon onClick={event => handleChatBoxClick(event, false)}/>
        </IconButton>
      </Box>
      <div className={classes.content}>
        { chatContent.map((person, i) => 
          <List className={classes.root} key = {i}>
            <ListItem>
              <ListItemAvatar>
                <AvatarIcon />
              </ListItemAvatar>
              <Reciver data={person} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <Sender data={person} />
            </ListItem>
            <Divider button variant="inset" component="li" />
          </List>
        )}
      </div>
      <Box className={classes.textarea}>
          <InputBase
            className={classes.input}
            placeholder="Enter your message..."
          />
      </Box>
    </div>
  );
};

class Reciver extends React.Component {
  render() {
    const reciveStyle = {
        padding: 9,
        fontSize: "13px",
        borderRadius: "14px",
        background: "#fff",
        letterSpacing: 0,
        lineHeight: "normal",
        color: "#808080"
    };
    return (
      <div style={reciveStyle}>
        {this.props.data.receiver}
      </div>        
    );
  }
}

class Sender extends React.Component {
  render() {
    const sendStyle = {
      padding: 9,
      fontSize: "13px",
      borderRadius: "14px",
      background: "#0087e0",
      letterSpacing: 0,
      lineHeight: "normal",
      color: "#fff"
  };
    return(
      <div style={sendStyle}>
        {this.props.data.sender}
      </div>
    );
  }
}

export default ChatBox;
