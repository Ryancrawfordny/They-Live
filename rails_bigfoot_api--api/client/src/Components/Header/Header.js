import React, { Component } from "react";
import Comments from "../../Components/Comments/Comments";
// import Home from "./Comments/Home/Home"
import { Link, Route } from "react-router-dom";
import Sightings from "../Sightings/Sightings";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <li>
            <Link to="/posts">Message Board</Link>
            <Link to="/sightings">Sightings</Link>
          </li>
        </nav>
      </div>
    );
  }
}

export default Header;
