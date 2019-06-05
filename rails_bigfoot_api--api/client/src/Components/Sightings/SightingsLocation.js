import React, { PureComponent } from "react";
import SightingsDescription from "./SightingsDescription";

export default class SightingsLocation extends PureComponent {
  render() {
    const { info } = this.props;

    const sightings = (
      <div>
        {this.props.sightings.map((sightings, index) => (
          <SightingsDescription key={index} sightings={sightings} />
        ))}
      </div>
    );

    return <div>{sightings}</div>;
  }
}
