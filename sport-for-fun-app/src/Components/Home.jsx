import React from 'react';
import './Home.scss'
import Cities from './HomePage/Cities'
import HeaderImage from './HomePage/HeaderImage'

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
     <div class="cities">
       <Cities/>
       </div>
         </div> 
         );
  }

}
