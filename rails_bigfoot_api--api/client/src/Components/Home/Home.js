import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home-h1">Bigfoot Lives!</h1>
        <h3 className="home-h3">Who is Bigfoot?</h3>
        <p className="home-p">
          Often known as the "missing link" bigfoot is a big, hairy, ape man-
          thing that roams the forests. Its diet is very much like any primate.
          Witnesses say that it ranges between 6 and 11 feet tall. There are different variations 
          of the beast ranging from state to state, country to country, continent to continent.
        </p>
      </div>
    );
  }
}

export default Home;
