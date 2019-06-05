import React, { Component } from "react";
import Comments from "../../Components/Comments/Comments";
// import Home from "./Comments/Home/Home"
import { Link, Route } from "react-router-dom";
import './Header.css'


class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/posts">Message Board</Link>
            <Link to="/sightings">Sightings</Link>
            <Link to="/home">Home</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
