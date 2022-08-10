import React, { Component } from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

class Die extends Component {
    render() {
        return (
            <FontAwesomeIcon icon={`fa-solid fa-dice-${this.props.face}`} size="10x" className={this.props.isRolling ? "Die Die-shake" : "Die"} />
        );
    }
}

export default Die;