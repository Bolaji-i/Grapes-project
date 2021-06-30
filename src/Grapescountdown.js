import React, { Component } from 'react'
import Grapestimer from './Grapestimer';

class Grapescountdown extends Component {
    constructor (props){
        super(props);
        this.state = { num: 60 }
    }

    render(){
        return <Grapestimer>{this.state.num}</Grapestimer>;
    }
}

export default Grapescountdown;

 