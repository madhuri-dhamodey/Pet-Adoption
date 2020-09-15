import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image'
import Default from './components/Default';
import Details from './components/Details';
import ListOfPets from "./components/ListOfPets"
import HandleSignUp from "./components/HandleSignUp"

class App extends Component {
  render() {
    return (
     <React.Fragment> 
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Image}/>
          <Route path="/ListOfPets" component={ListOfPets}/>
          <Route path="/HandleSignUp" component={HandleSignUp}/>
          <Route path="/Details" component={Details}/>
          <Route component={Default}/>
        </Switch>
     </React.Fragment>

    );
  }
} 

export default App;
