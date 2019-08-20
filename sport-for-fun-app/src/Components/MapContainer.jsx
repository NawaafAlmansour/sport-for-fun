
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import * as parkData from "./data/skateboard-parks.json";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 24.678145, lng: 46.723191 }}
  >
  {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}

        />
      ))}



  </GoogleMap>
));

function MapContainer() {
  return (
    <div className="MapContainer">
      <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJzCYpUwut6lwybLf5aJFccJJPXD8erC0&callback=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
    </div>
  );
}

export default MapContainer;
