import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import SightingsInfo from './SightingsInfo';
import SightingsPin from './SightingsPin'
// import SightingsLocation from './SightingsLocation'

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGFudGVmYWxjb25hcmkiLCJhIjoiY2p3aTA0Z2JwMW9yODQ5bjJycTltdXhrYSJ9.KloquPfpOmcD-YBSROmoNQ"

class SightingsMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            viewport: {
                width: 800,
                height: 500,
                latitude: 54.5260,
                longitude: -95.7129,
                zoom: 2
            },
            popupInfo: null
        }
        this._renderMarker = this._renderMarker.bind(this)
        this._renderPopup = this._renderPopup.bind(this)
    };

    _renderMarker(sightings, i) {
        const lat = Number(sightings.lat)
        const lng = Number(sightings.long)

      
        
        return (
            <Marker key={`sightings-${i}`} longitude={lng} latitude={lat}>
                <SightingsPin
                    size={10}
                    onClick={() => this.setState({ popupInfo: sightings })} />
            </Marker>
        );
    }

    _renderPopup() {
        const {popupInfo} = this.state;

        

        const lng = popupInfo.lat
        const lat = popupInfo.long

        return (
          <Popup tipSize={5}
            anchor="top"
            longitude={lng}
            latitude={lat}
            onClose={() => this.setState({popupInfo: null})} >
            <SightingsInfo info={popupInfo} />
          </Popup>
        );
      }

  


    render() {
        const sightings = this.props.sightings;
        
        const { viewport } = this.state;

        return (
            <ReactMapGL
                width={viewport.width}
                height={viewport.height}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}

                mapStyle="mapbox://styles/mapbox/light-v8"

                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={MAPBOX_TOKEN}>

                {sightings && sightings.map(this._renderMarker)}

                {this.state.popupInfo && this._renderPopup() }

            </ReactMapGL>

        );
    }
}

export default SightingsMap
