import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "./components/Header/Header";
import Meeting from "./pages/Meeting/Meeting";
import Sales from "./pages/Sales/Sales";
import Grid from "@material-ui/core/Grid";
import SideMenu from "./components/SideMenu/SideMenu";
import Chat from "./components/Chat/Chat";
import ChatBox from "./components/ChatBox/ChatBox";
import axios from 'axios';

import "./App.scss";

const App = () => {
  const [listIndex, setListIndex] = React.useState(-1);
  const [chatData, setChatData] = React.useState();

  const handleListItem = index => {

    axios.get(`http://localhost:8000/getmsg`)
    .then(res => {
      setChatData(res.data);
      setListIndex(index);
    })
    .catch(error => {
      setChatData([]);
    })
  }

  const handleChatBox = index => {
    setListIndex(index);
  }

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Box className="app">
        <Container fixed={false} maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <SideMenu />
              <Chat handleListItem={index => handleListItem(index)} />
              {listIndex !== -1 && (
                <ChatBox handleChatBox={index => handleChatBox(index)} chatData = {chatData} />
              )}
            </Grid>
            <Grid item xs={10}>
              <Switch>
                {/* <Route path="/" component={Meeting}></Route> */}
                <Route path="/teacher-panel/sales" component={Sales}></Route>
                <Route path="/teacher-panel" component={Meeting}></Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
