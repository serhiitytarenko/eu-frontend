import React, { Component, createRef } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import data from '../assets/data';
// import Markers from './VenueMarkers';
import Routing from "./RoutingMachine";


const MAP_CONFIG = {
  minZoom: 0,
  zoomSnap: 0.1,
  center: [48.589720, 31.190830],
  attributionControl: false,
  zoomControl: false,
  bounds: [
      [48.419167, 22.137222],
      [49.260556, 40.228056],
      [52.378611, 33.191944],
      [44.387222, 33.738056],
    ],
  boundsOptions: {padding: [10, 10]},
}

const TILE_LAYER_URL = 'https:\//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';




class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapInit: false,
      hasErrors: false,
      points: {}
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: false
    });
  };

  render() {
    return (
      <Map {...MAP_CONFIG} ref={this.saveMap}>
        <TileLayer url={TILE_LAYER_URL} />  
        {this.state.isMapInit && <Routing map={this.map} />}
        <ZoomControl position="bottomright" />    
      </Map>
    );
  }
}

export default MapView;
