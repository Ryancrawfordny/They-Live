import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Sightings from "./Components/Sightings/Sightings";
import Comments from "./Components/Comments/Comments";
import Posts from "./Components/Posts/Posts"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/* <Header /> */}
          {/* <Sightings /> */}

          {this.props.children}
        </div>
        {/*Nav*/}
        <switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/" render={() => <Header />} />
          </switch>


          {/*main content*/}
          <switch>
          <Route path="/Home" component= {Home} />
          <Route path="/posts" render={() => <Posts />} />
        </switch>

        {/*sight*/}
        <switch>

          <Route path="/sightings" render={() => <Sightings />} />
          {/* <Route path="/comments" render={() => <Comments />} /> */}

        </switch>
        
        
      </div>
    );
  }
}

export default App;
