import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './Grapescontainer.css'
import Grapestimer from './Grapestimer';
import Grapesform from './Grapesform';

class Grapescontainer extends Component {
    render() {
        return (
            <div class="container is-max-widescreen">
                <Grapestimer num={35}></Grapestimer>
                <Grapesform></Grapesform>
            </div>
        )
    }
}

export default Grapescontainer;