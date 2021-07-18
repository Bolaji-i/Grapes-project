import React, { Component } from 'react';
import './Coinflip.css';
import Coin from './Coin';
import { choice } from './helpers';

class Coinflip extends Component {
    static defaultProps = {
        coins: [
            { flipSide: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
            { flipSide: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            side: null,
            total: 0,
            heads: 0,
            tails: 0
        }
        this.performFlip = this.performFlip.bind(this);
    }

    flip() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                side: newCoin,
                total: st.total + 1,
                heads: (st.heads + (newCoin.flipSide === 'heads' ? 1 : 0)),
                tails: (st.tails + (newCoin.flipSide === 'tails' ? 1 : 0))
            };
        });
    }

    performFlip() {
        this.flip();
    }

    render() {
        return (
            <div className='Coinflip'>
                <h3>Let's flip a coin!</h3>
                {this.state.side && <Coin info={this.state.side} />}
                <button onClick={this.performFlip}>Flip Me</button>
                <h5>
                    Out of <span id='Coinflip-total'>{this.state.total}</span> flips,
                    there have been <span id='Coinflip-heads'>{this.state.heads}</span> heads and <span id='Coinflip-tails'>{this.state.tails}</span> tails.
                </h5>
            </div>
        )
    }
}

export default Coinflip;