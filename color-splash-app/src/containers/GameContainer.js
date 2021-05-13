import React, { Component } from 'react';
import Game from '../components/Game'

class GameContainer extends Component {

    render() {
        return (
            <div className="border border-4 border-dark" style={{padding: '2%', backgroundColor: 'white'}}>
                <h2 className='splash-board' style={{fontSize: '16pt'}}>SPLASH THE BOARD!</h2>
                <Game handleClickCount={this.props.handleClickCount} clickCount={this.props.clickCount} rowsCols={this.props.rowsCols} boardUpdate={this.props.boardUpdate} decrementBoardUpdate={this.props.decrementBoardUpdate} />
            </div>
        )
    }
}

export default GameContainer