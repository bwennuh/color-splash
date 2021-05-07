import React, { Component } from 'react';
import Game from '../components/Game'

class GameContainer extends Component {
    render() {
        return (
            <div >
                <h1>Game</h1>
                <Game />
            </div>
        )
    }
}

export default GameContainer