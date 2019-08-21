import React from 'react';
import CardsMap from './MapPage/cardsMap';
import MapContainer from './MapContainer';

import './mapGallery.scss'

export default class MapGallery extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>

        <div className="contener">
          <div className="mapcard">
            <CardsMap/>
          </div>
            <div className="map">
              <MapContainer/>
            </div>

          </div>

       </div>
  );
  }

}
