import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <footer className="main-footer">
          <h1 className="footer-h1">Bigfoot Lives!&#169;</h1>
          <p className="footer-resource">Resources</p>
          <div className="footer-nav">
            <nav className="finder">
              <a href="https://bigfootfinder.com/">Bigfoot Finder</a>
            </nav>
            <nav className="bfro">
              <a href="https://www.bfro.net/">Visit BFRO </a>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
