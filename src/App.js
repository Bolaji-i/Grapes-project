import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grapesnav from './Grapesnav';
import Grapescontainer from './Grapescontainer';
import Grapesfooter from './Grapesfooter';






class App extends Component {
  render() {
    return (
      <div>
        <Grapesnav></Grapesnav>
        <Grapescontainer></Grapescontainer>
        <Grapesfooter></Grapesfooter>
      </div>

    )
  }
}


export default App;
