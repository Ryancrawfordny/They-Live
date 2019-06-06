import React from "react";

const SightingsDescription = props => {
  return (
    <div>
      <p> Sighting Report: {props.sightings.report}</p>
      <p> Info : {props.sightings.info}</p>
    </div>
  );
};

export default SightingsDescription;
