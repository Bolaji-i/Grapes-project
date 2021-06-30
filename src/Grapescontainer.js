import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './Grapescontainer.css'
import Grapescountdown from './Grapescountdown';

class Grapescontainer extends Component {
    render() {
        return (
            <div class="container is-max-widescreen">
                <Grapescountdown></Grapescountdown>
            </div>
        )
    }

}

export default Grapescontainer;