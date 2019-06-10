import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Sightings from "./Components/Sightings/Sightings";
import Comments from "./Components/Comments/Comments";
import Posts from "./Components/Posts/Posts";
import Footer from "./Components/Footer/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
          {/*main content*/}
          <Switch>
          <Route path="/Home" component= {Home} />
          <Route path="/posts" render={() => <Posts />} />
        </Switch>

        {/*sight*/}
        <Switch>

          <Route path="/sightings" render={() => <Sightings />} />
          <Route path="/comments" render={() => <Comments />} />

        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default App;
