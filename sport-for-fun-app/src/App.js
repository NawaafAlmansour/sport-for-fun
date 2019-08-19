import React from 'react';
import './App.scss';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'

import Header from './Components/Header';
import Home from './Components/Home';
import Information from './Components/Information';
import MapGallery from './Components/mapGallery';
import Footer from './Components/Footer';

import IconButton from '@material-ui/core/IconButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Router>
        <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Information" component={Information} />
        <Route path="/MapGallery" component={MapGallery} />
          <Route component={Home} />
      </Switch>
      </div>
      {/*<FontAwesomeIcon icon={faAddressBook} size="md" >
      </FontAwesomeIcon>*/}
      <Footer/>

    </Router>
  </div>
    );
  }

}
