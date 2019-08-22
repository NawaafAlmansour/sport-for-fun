import React from 'react';
import './Banner.scss'


 export default class Banner extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }
   render() {
    return (
      <section id="banner"
        style ={ { backgroundImage: "url("+this.props.img1+")" } }>
>
        <div className="inner">
           <h1>{this.props.activities}</h1>
        </div>
      </section>
    );
  }
 }
