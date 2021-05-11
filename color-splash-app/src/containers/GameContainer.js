import React, { Component } from 'react';
import Game from '../components/Game'

class GameContainer extends Component {

    render() {
        return (
            <div >
                <h1>Game</h1>

                <Game handleClickCount={this.props.handleClickCount} clickCount={this.props.clickCount} rowsCols={this.props.rowsCols} boardUpdate={this.props.boardUpdate} decrementBoardUpdate={this.props.decrementBoardUpdate} />
            </div>
        )
    }
}

export default GameContainer