import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home'
import PageTwo from './pages/PageTwo/PageTwo'
import PageFive from './pages/PageFive/PageFive'
import ScrollButton from './components/ScrollButton/ScrollButton'
import Footer from "./components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/courses">
              <Home />
            </Route>
            <Route exact path="/courses/page-two">
              <PageTwo />
            </Route>
            <Route exact path="/courses/page-Five">
              <PageFive />
            </Route>
          </Switch>
          <Footer />
          <ScrollButton />
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
