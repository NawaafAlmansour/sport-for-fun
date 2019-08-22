import React from 'react';
import './Information.scss'

import Banner from './Information/Banner';
import Details from './Information/Details';
import Slideshow from './Information/Slideshow';
import Description from './Information/Description';

import * as cinter from  "./HomePage/CityDB.json";

 export default class Information extends React.Component {

   constructor(props) {
     super(props);
     console.log("i am 2",this.props);

     this.state = {
       id: this.props.match.params.id,
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
    description: cinter.default.cities[this.state.id].centers[this.state.id].description,
    centerName: cinter.default.cities[this.state.id].centers[this.state.id].centerName,
    img1:cinter.default.cities[this.state.id].centers[this.state.id].images[this.state.id] ,
    img2:cinter.default.cities[this.state.id].centers[this.state.id].images[1] ,
    img3:cinter.default.cities[this.state.id].centers[this.state.id].images[2] ,
    contact: cinter.default.cities[this.state.id].centers[this.state.id].contact,
    comments:cinter.default.cities[this.state.id].centers[this.state.id].comments,
    visitors:cinter.default.cities[this.state.id].centers[this.state.id].visitors,
    address:cinter.default.cities[this.state.id].centers[this.state.id].address,
    openingHours:cinter.default.cities[this.state.id].centers[this.state.id].openingHours,
    activities:cinter.default.cities[this.state.id].centers[this.state.id].activities,
  });
}
   render() {
     console.log("i am",this.props.match.params.id);
       return (
       <div>
        <Banner
          img1={this.state.img1}
          activities={this.state.activities}
          />
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
