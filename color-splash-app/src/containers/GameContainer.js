import React, { Component } from 'react';
import Game from '../components/Game'

class GameContainer extends Component {

    render() {
        return (
            <div style={{padding: '5%'}}>
                <h2 className='splash-board' style={{fontSize: '16pt'}}>Splash the board!</h2>

                <Game handleClickCount={this.props.handleClickCount} clickCount={this.props.clickCount} rowsCols={this.props.rowsCols} boardUpdate={this.props.boardUpdate} decrementBoardUpdate={this.props.decrementBoardUpdate} />
            </div>
        )
    }
}

export default GameContainer