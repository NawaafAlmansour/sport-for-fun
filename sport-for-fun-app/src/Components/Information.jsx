import React from 'react';
import './Information.scss'

import Banner from './Information/Banner';
import Details from './Information/Details';
import Images from './Information/Images';
import Description from './Information/Description';
import * as parData from  "./HomePage/CityDB.json";

 export default class Information extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       Info : undefined,

     };
   }
   {parData.default.cities[0].centers.map(park => (
     <div className="card">
     <RecipeReviewCard
        name={park.centerName}
         image={park.images[0]}
         kind={park.sportKind}/>
   </div>
   ))}

   render() {
     return (
       <div>
        <Banner/>
          <div className="Image">
           <Images/>
          </div>
          <div className="Deta">
           <Details/>
          </div>
          <div className="Des">
           <Description/>
          </div>


       </div>

     );
   }

 }
