import React, { Component } from "react";
import SightingsMap from "./SightingsMap.js";
import axios from "axios";

class Sightings extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const comments = await axios.get("http://localhost:4567/sightings");
    const apiData = comments.data;
    this.setState({ apiData, apiDataLoaded: true });
  };

  render() {
    return (
      <div>
        <SightingsMap sightings={this.state.apiData} />
      </div>
    );
  }
}

export default Sightings;
