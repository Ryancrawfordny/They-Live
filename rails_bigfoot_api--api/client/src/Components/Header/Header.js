import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import './Header.css'


class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/sightings" className="nav-link">Sightings</Link>
            <Link to="/posts" className="nav-link">Message Board</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
