import React from 'react';
import './Information.scss'

import Banner from './Information/Banner';
import Details from './Information/Details';
import Images from './Information/Images';
import Description from './Information/Description';

 export default class Information extends React.Component {

   constructor(props) {
     super(props);

     this.state = {

     };
   }

   render() {
     return (
       <div>
        <Banner/>
        <Description/>
        <Images/>
       <Details/>
       
       </div>
       
     );
   }

 }

 
 