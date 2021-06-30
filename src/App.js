import './App.css';
import React, { Component } from 'react';
import Grapesnav from './Grapesnav';
import Grapesfooter from './Grapesfooter';
import Grapescontainer from './Grapescontainer';


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
