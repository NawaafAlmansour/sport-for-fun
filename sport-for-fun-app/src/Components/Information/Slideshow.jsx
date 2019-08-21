import React from 'react';
import './Images.scss';
import { Slide } from 'react-slideshow-image';



const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

 const Slideshow = (props) => {
     return (
      <Slide {...properties}>
        <div className="each-slide">
          <div className="img-slide" style={{'backgroundImage': `url(${props.img1})`}}>
            <span> </span>
          </div>
        </div>
        <div className="each-slide">
          <div className="img-slide" style={{'backgroundImage': `url(${props.img2})`}}>
            <span></span>
          </div>
        </div>
        <div className="each-slide">
          <div className="img-slide" style={{'backgroundImage': `url(${props.img3})`}}>
            <span></span>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow
