import React, { Component } from 'react';
import Home from '../components/Home.js'
import Instructions from '../components/Instructions.js'
import GameContainer from '../containers/GameContainer.js'
import HighScore from '../components/HighScore.js'
import EndScreen from '../components/EndScreen.js'
import Credits from '../components/Credits.js'

class MainContainer extends Component {

  state = {
    clickCount: 0,
    score: 0,
    rowsCols: 4,
    boardUpdate: 0
  }

  handleScoreSubmit = (event) => {
    event.preventDefault()
    const input = event.target.children[0]
    // User's nickname
    console.log(input.value)
    // Reset field
    input.value = ""
  }

  handleClickCount = () => {
    let clicks = this.state.clickCount
    clicks = clicks + 1
    // console.log(`Clicked ${clicks} times`)
    this.setState({clickCount: clicks})
  }

  changeBoardSize = (number) => {
    console.log(number)

    this.setState({
      rowsCols: number
    })
  }

  incrementBoardUpdate = () => {
    let boardUpdateCount = this.state.boardUpdate
    boardUpdateCount = boardUpdateCount + 1
    console.log(`Board updates: ${boardUpdateCount}`)

    this.setState({boardUpdate: boardUpdateCount}) 
  }

  decrementBoardUpdate = () => {
    let boardUpdateCount = this.state.boardUpdate
    boardUpdateCount = boardUpdateCount - 1
    console.log(`Board updates: ${boardUpdateCount}`)

    this.setState({boardUpdate: boardUpdateCount})
  }

  handleBoardSize = (number) => {
    this.changeBoardSize(number)

    this.incrementBoardUpdate()

    // this.forceUpdate()
  }

  render(){
    return(
      <div>
        <h1>Main Container for Color Splash</h1>
        <Home />
        <Instructions rowsCols={this.state.rowsCols} handleBoardSize={this.handleBoardSize} />
        <GameContainer rowsCols={this.state.rowsCols} handleClickCount={this.handleClickCount} clickCount={this.state.clickCount} boardUpdate={this.state.boardUpdate} decrementBoardUpdate={this.decrementBoardUpdate} />
        <HighScore handleScoreSubmit={this.handleScoreSubmit} clickCount={this.state.clickCount} />
        <EndScreen />
        <Credits />
      </div>
    )
  }
}

export default MainContainer