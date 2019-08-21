import React from 'react';
import './Information.scss'

import Banner from './Information/Banner';
import Details from './Information/Details';
import Slideshow from './Information/Slideshow';
import Description from './Information/Description';
import * as parData from  "./HomePage/CityDB.json";

 export default class Information extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       Info : undefined,
       centerName:undefined ,
       img1:undefined ,
       img2:undefined ,
       img3:undefined ,
       contact: undefined,
       comments:undefined,
       visitors:undefined,
       address:undefined,
       openingHours:undefined,
       activities:undefined,

     };
   }
 
componentDidMount() {
  this.setState({
    description: parData.default.cities[0].centers[0].description,
    centerName: parData.default.cities[0].centers[0].centerName,
    img1:parData.default.cities[0].centers[0].images[0] ,
    img2:parData.default.cities[0].centers[0].images[1] ,
    img3:parData.default.cities[0].centers[0].images[2] ,
    contact: parData.default.cities[0].centers[0].contact,
    comments:parData.default.cities[0].centers[0].comments,
    visitors:parData.default.cities[0].centers[0].visitors,
    address:parData.default.cities[0].centers[0].address,
    openingHours:parData.default.cities[0].centers[0].openingHours,
    activities:parData.default.cities[0].centers[0].activities,
  });
}
   render() {
       return (
       <div>
        <Banner/>
          <div className="Image">
           <Slideshow
             img1={this.state.img1}
             img2={this.state.img2}
             img3={this.state.img3}

             />
          </div>
          <div className="Deta">
           <Details
              contact={this.state.contact}
             comments={this.state.comments}
             visitors={this.state.visitors}
             address={this.state.address}
             openingHours={this.state.openingHours}
             activities={this.state.activities}

             />
          </div>
          <div className="Des">
           <Description
             des={this.state.description}
             centerName={this.state.centerName}
             />
          </div>


       </div>

     );
   }

 }
