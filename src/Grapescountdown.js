import React, { Component } from 'react'
import Grapestimer from './Grapestimer';
import 'bootstrap/dist/css/bootstrap.min.css';

class Grapescountdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HH: 0,
            MM: 0,
            SS: 0
        };
    }

    render() {
        return (
            <div>
                <Grapestimer>{this.state.num}</Grapestimer>
                <section>
                    <span>{this.state.HH}</span>
                    <span>{this.state.MM}</span>
                    <span>{this.state.SS}</span>
                </section>
            </div>
        )
    }
}

export default Grapescountdown;

