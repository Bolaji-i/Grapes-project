import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grapesfavorites from './Grapesfavorites';
import './Grapescontainer.css'
import Lotto from './Lotto';
import RollDice from './RollDice';
import Coinflip from './Coinflip';

class Grapescontainer extends Component {
    render() {
        return (
            <div className ="container-sm px-4">
                <Grapesfavorites />
                <h2>If you are a lotto lover, this for you! 😜😁</h2>
                <Lotto />
                <Lotto title='Mini Daily' maxNum={30} numBalls = {4} />
                <RollDice />
                <Coinflip />
            </div>
        );
    }
}

export default Grapescontainer;