import React, { Component } from 'react'

class Grapestimer extends Component{

    countDown(num) {
        let start = num;
        let interval =
            setInterval(
                function rex() {
                    start = start - 1;
                    this.setState({num : start})
                    if (start === 0) {
                        clearInterval(interval);
                    }
        }, 1000);
    } 
    render(){
        return <h1>{this.state.num}</h1>;
    }
}

export default Grapestimer;