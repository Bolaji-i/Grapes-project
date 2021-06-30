import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './Grapescontainer.css'
import Grapescountdown from './Grapescountdown';
import Grapesform from './Grapesform';

class Grapescontainer extends Component {
    render() {
        return (
            <div class="container is-max-widescreen">
                <Grapescountdown></Grapescountdown>
                <Grapesform></Grapesform>
            </div>
        )
    }

}

export default Grapescontainer;