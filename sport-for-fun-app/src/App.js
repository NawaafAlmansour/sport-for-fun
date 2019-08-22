import React from 'react';
import './App.scss';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom'

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
      idCity :0,
      idCinter :0,

    };
  }
changeCity =(e)=>{
console.log("changeCity", e.target.id)
this.setState({
  idCity : e.target.id,
  idCinter : e.target.id,

})
}
  render() {
    return (
      <div>
        <HashRouter>
          <Header/>
        <div>
        <Switch>
        <Route exact path="/" render={props => <Home changeCity = {this.changeCity} id = {this.state.idCity} />} />
        <Route path="/Information/:id" render={props => <Information {...props} changeCinter = {this.changeCity} />} />
         {/* <Route path="/MapGallery" component={MapGallery} />  */}
        <Route path="/MapGallery" render={props => <MapGallery changeCity = {this.changeCity} id = {this.state.idCity} />} />
        <Route path="/home" render={props => <Home changeCity = {this.changeCity} id = {this.state.idCity} />} />

          {/* <Route render = {props => <Home changeCity = {this.changeCity} id = {this.state.idCity} />} /> */}
      </Switch>
      </div>
      {/* <FontAwesomeIcon icon={faAddressBook} size="md" >
      </FontAwesomeIcon> */}
      <Footer/>

    </HashRouter>
  </div>
    );
  }

}
