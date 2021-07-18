import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grapesnav from './Grapesnav';
import Grapescontainer from './Grapescontainer';
import Grapesfooter from './Grapesfooter';






class App extends Component {
  render() {
    return (
      <div className = 'App'> 
        <Grapesnav></Grapesnav>
        <Grapescontainer></Grapescontainer>
        <Grapesfooter></Grapesfooter>
      </div>

    )
  }
}


export default App;
