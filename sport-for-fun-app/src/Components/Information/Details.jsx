import React from 'react';
import './Details.scss'


 export default class Details extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }

   
   render() {
     return (
    
      <div className="row">
        <div className="column">
          <div className="card">
            <h2>Address</h2>
            <p> P.O. Box 84329 </p>
            <p> Riyadh 11671 </p>
            <p> Kingdom of Saudi Arabia</p>
            {/* <a className="btn" href="https://www.google.com/maps/place/%D9%86%D8%A7%D8%AF%D9%8A+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+%D9%84%D9%84%D9%82%D9%88%D9%84%D9%81%E2%80%AD/@24.9591668,46.5781907,17z/data=!3m1!4b1!4m5!3m4!1s0x3e2eeb930999cc61:0xfa3dcc88ed2aea0d!8m2!3d24.9591668!4d46.576002"><i className="flaticon-map" />   Show in map</a> */}
            {/* <button className="btn " onclick= {window.open('https://www.google.com/maps/place/%D9%86%D8%A7%D8%AF%D9%8A+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+%D9%84%D9%84%D9%82%D9%88%D9%84%D9%81%E2%80%AD/@24.9591668,46.5781907,17z/data=!3m1!4b1!4m5!3m4!1s0x3e2eeb930999cc61:0xfa3dcc88ed2aea0d!8m2!3d24.9591668!4d46.576002')}>  <i className="flaticon-map" />   Show in map </button> */}
            <button className="btn "><a target="_blank"className="btn" href="https://www.google.com/maps/place/%D9%86%D8%A7%D8%AF%D9%8A+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+%D9%84%D9%84%D9%82%D9%88%D9%84%D9%81%E2%80%AD/@24.9591668,46.5781907,17z/data=!3m1!4b1!4m5!3m4!1s0x3e2eeb930999cc61:0xfa3dcc88ed2aea0d!8m2!3d24.9591668!4d46.576002"><i className="flaticon-map" />   Show in map</a> </button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Opening Hours </h2>
           
            <button className="btn "> Show the calender</button>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h2>Contact </h2>
            <button className="btn "> <a href="tel:123-456-7890"> <i className="flaticon-phone" />  Click To Call</a> </button>
            <button className="btn "><a target="_blank"className="btn" href="https://www.riyadhgolfcourses.com/"><i className="flaticon-map" />   Show Website</a> </button>

          </div>
        </div>

        <div className="column">
          <div className="card">
            <h2>visitors </h2>
            <p> Male </p>
            <p> Female </p>
            <p> Kids </p>
          </div>
        </div>
      </div>
     );
   }
 }

 