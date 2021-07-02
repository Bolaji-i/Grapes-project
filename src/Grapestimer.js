import React, { Component } from 'react'
import './Grapestimer.css'

class Grapestimer extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            sec : 7,
            min : 2,
            hr : 0
         };
        this.countDown();
    }

    countDown(){
        let seconds = this.state.sec;
        let minutes = this.state.min;
        let hours = this.state.hr;
        let interval =
            setInterval(() => { 
                seconds = seconds - 1;
                this.setState({ sec : seconds })
                    if (seconds === 0 && minutes !== 0){
                        minutes--;    
                        seconds = 60
                        this.setState({ min : minutes })
                            seconds = 60;
                    } 
                    if (minutes === 0){
                        hours--;
                        this.setState({ hr : hours })
                        if(hours !==0 || hours < 1){
                            minutes = 60;
                            seconds = 60;
                        }
                    }
                    if (seconds === minutes === hours === 0) {
                        clearInterval(interval);
                    }
                }, 1000);
    }

    render(){
        return (
        <div className="grapestimer">
            <span id="grapestimer-hour">{this.state.hr}</span>
            <span id="grapestimer-min">{this.state.min}</span>
            <span id="grapestimer-sec">{this.state.sec}</span>
        </div>);
    }
}

export default Grapestimer;