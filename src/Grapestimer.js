import React, { Component } from 'react'
import 'bulma/css/bulma.min.css';
import './Grapestimer.css'

class Grapestimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 7,
            min: 1,
            hr: 1
        };
        this.countDown();
    }

    countDown() {
        let seconds = this.state.sec;
        let minutes = this.state.min;
        let hours = this.state.hr;
        let interval =

            setInterval(() => {
                if (seconds === minutes === hours === 0) {
                    clearInterval(interval);
                }
                seconds = seconds - 1;
                this.setState({ sec: seconds })
                if (seconds === 0 && minutes > 0) {
                    minutes--
                    this.setState({ min: minutes })
                    seconds = 60;
                }
                if (minutes === 0 && hours === 1) {
                    hours = 0;
                    if (hours === 0) {
                        minutes = 60;
                    }
                    this.setState({ hr: hours })
                }
            }, 1000);
    }

    render() {
        return (
            <div>
                <div class="columns is-mobile">
                    <div class="column">
                        <div className="grapestimer">
                            <span id="grapestimer-hour">{this.state.hr}</span>
                            <span className="coli">:</span>
                            <span id="grapestimer-min">{this.state.min}</span>
                            <span className="coli">:</span>
                            <span id="grapestimer-sec">{this.state.sec}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grapestimer;