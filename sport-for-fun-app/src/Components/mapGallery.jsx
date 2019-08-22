import React from 'react';
import CardsMap from './MapPage/cardsMap';
import MapContainer from './MapContainer';

import './mapGallery.scss'
// import * as city from './HomePage/CityDB.json';

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
            <CardsMap id1 = {this.props.id}/>
          </div>
            <div className="map">
              <MapContainer id = {this.props.id} name={"marc"} />
            </div>

          </div>

       </div>
  );
  }

}
