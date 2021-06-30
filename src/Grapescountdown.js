import React, { Component } from 'react'
import Grapestimer from './Grapestimer';

class Grapescountdown extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 60 }
    }

    render() {
        return(
            <div>
            <Grapestimer>{this.state.num}</Grapestimer>
            <section><span>HH</span><span>MM</span><span>SS</span></section>
        </div>
        )
    }
}

export default Grapescountdown;

