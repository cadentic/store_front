import React from 'react';
import 'font-awesome/css/font-awesome.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navbar from './routes/layout/Navbar';

import Course from './routes/course/Course';

import Course20 from './routes/course/Course20';
import Course21 from './routes/course/Course21';
import Course22 from './routes/course/Course22';
import Course23 from './routes/course/Course23';
import Course24 from './routes/course/Course24';
import Course25 from './routes/course/Course25';
import Course26 from './routes/course/Course26';
import Course27 from './routes/course/Course27';
import Blog33 from './routes/blog/Blog33';
import Blog34 from './routes/blog/Blog34';
import Footer from './routes/layout/Footer';
import ChatBox from './routes/layout/ChatBox';
import CourseContainer from './routes/course/CourseContainer';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
      chatData: []
    };
  }

  handleChatBox = () => {

    axios.get('/json/chatbox.json')
    .then(res => {
      this.setState(state=> ({
        showBox: !state.showBox
      }));
      this.setState(state=> ({
        chatData: res.data
      }));
    })
    .catch(error => {
      this.setState(state=> ({
        chatData: []
      }));
    })
     }

  closeChatBox = () => {
    this.setState(state=> ({
      showBox: false
    }));
  }

  render() {
    return(
      <Router>
        <Navbar />
        <CourseContainer>
            <Switch>
              <Route path="/course/:id" component={Course} />

              <Route path="/blog33" component={Blog33} />
              <Route path="/blog34" component={Blog34} />
              <Route path="/" component={Course} />
            </Switch>
        </CourseContainer>
        <Footer handleMsgClick={this.handleChatBox} />

        {this.state.showBox && (
          <ChatBox handleChatBox={this.closeChatBox} chatContent={this.state.chatData}/>
        )}

          <style>{`
              body {
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  color: #2d2d2d;
              }
              .section-container {
                  width: 100%;
                  max-width: 1170px;
                  position: relative;
                  margin: 0 auto;
              }

              .border-bottom {
                  border-bottom: solid 1px #dbe4ed;
              }
              .border-top {
                  border-top: solid 1px #dbe4ed;
              }
              .border-right {
                  border-right: solid 1px #dbe4ed;
              }
              .border-left {
                  border-left: solid 1px #dbe4ed;
              }


              /* font common */
              .uppercase {
                  text-transform: uppercase;
              }
              .lowercase {
                  text-transform: lowercase;
              }
              .text-center {
                  text-align: center;;
              }

              /* position common */
              .float-left {
                  float: left;
              }
              .float-right {
                  float: right;
              }
              .center-block {
                  margin: 0 auto;
                  position: relative;
                  display: inline-flex;
              }
              .clearfix::after{
                  display: block;
                  clear: both;
                  content: "";
              }

              /* margin common */
              .margin-left-6 {
                  margin-left: 6px;
              }
              .no-margin {
                  margin: 0px !important;
              }


              /* padding common */
              .no-padding {
                  padding: 0px !important;
              }

              @media screen and (max-width: 1280px) {
                  .section-container {
                      max-width: 90%;
                  }
              }
          `}</style>
      </Router>
      );
  }
}

export default App;
