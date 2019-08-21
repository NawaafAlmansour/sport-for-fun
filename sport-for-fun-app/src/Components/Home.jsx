import React from 'react';
import './Home.scss'
import Cities from './HomePage/Cities'
import HeaderImage from './HomePage/HeaderImage'
import * as city from './HomePage/CityDB.json';
 

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
      return (
        <div> 
     <HeaderImage/>
     <div className="cities">
       <Cities city={city} />
       </div>
         </div> 
         );
  }

}
