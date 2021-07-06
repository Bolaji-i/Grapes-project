import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grapescontainer.css'
import Grapestimer from './Grapestimer';
import Grapesform from './Grapesform';
import Grapesfavorites from './Grapesfavorites';



class Grapescontainer extends Component {
    render() {
        return (
            <div class="container-sm px-4">
                <Grapesfavorites></Grapesfavorites>
            </div>
        )
    }
}

export default Grapescontainer;