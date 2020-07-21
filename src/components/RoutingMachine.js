import {
  MapLayer
} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import {
  withLeaflet
} from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const {
      map
    } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(50.746805, 25.293008),
        L.latLng(49.405764, 26.958959)
      ],
      lineOptions: {
        styles: [{
          color: "blue",
          opacity: 0.6,
          weight: 4
        }]
      },
      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: true,
      altLineOptions: {
        styles: [{
          color: 'green',
          opacity: 1,
          weight: 5
        }]
      },
      lineOptions: {
        styles: [{
          color: 'red',
          opacity: 1,
          weight: 5
        }]
      },
      position: 'topleft',
      pointMarkerStyle: {
        radius: 5,
        color: 'blue',
        fillColor: 'blue',
        opacity: 1,
        fillOpacity: 0.7
      },

      router: new L.Routing.osrmv1({
        language: 'ru',
        profile: 'car'
      }),
      geocoder: L.Control.Geocoder.nominatim({})
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);