import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    state = { die1: 'three', die2: 'three', isRolling: false};
    roll = (e) => {
        const faces = ['one', 'two', 'three', 'four', 'five', 'six'];
        let die1Face = faces[Math.floor(Math.random() * 6)];
        let die2Face = faces[Math.floor(Math.random() * 6)];
        this.setState({ isRolling: true});
        setTimeout(() => {this.setState({ die1: die1Face, die2: die2Face, isRolling: false })}, 1000);
    }
    render() {
        return (
            <div className="RollDice">
                <Die face={this.state.die1} isRolling={this.state.isRolling}/>
                <Die face={this.state.die2} isRolling={this.state.isRolling}/>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? "Rolling..." : "Roll the Dice!"}</button>
            </div> 
        );
    }
}

export default RollDice;