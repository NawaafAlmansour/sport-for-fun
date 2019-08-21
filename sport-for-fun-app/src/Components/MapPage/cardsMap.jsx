import React, { Component } from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import  './CardsMap.scss';


export default class CardsMap extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
          <div className="card">
          <RecipeReviewCard  />
          </div>
          <div className="card">
          <RecipeReviewCard  />
          </div>
          <div className="card">
          <RecipeReviewCard  />
          </div>

        </div>
    );
  }

}
