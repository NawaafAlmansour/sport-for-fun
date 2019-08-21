import React  from 'react';

export default class CurrentYear extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }


render() {
    
    return React.createElement(
      "div",
      null,
      new Date().getFullYear() 
    );

  }

}