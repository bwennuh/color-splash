import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Home from '../components/Home.js'
import Instructions from '../components/Instructions.js'
import GameContainer from '../containers/GameContainer.js'
import HighScore from '../components/HighScore.js'
import EndScreen from '../components/EndScreen.js'
import Credits from '../components/Credits.js'
import Navbar from '../components/Navbar.js'


const BASE_URL = 'http://localhost:3000'

class MainContainer extends Component {

  state = {
    clickCount: 0,
    score: 0,
    rowsCols: 4,
    boardUpdate: 0
  }

  // handleScoreSubmit = (event) => {
  //   event.preventDefault()
  //   const input = event.target.children[0]
  //   // User's nickname
  //   console.log(input.value)
  //   // Reset field
  //   input.value = ""
  // }

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
      <div className='d-flex row justify-content-center text-center align-self-center' style={{height: '100vh'}}>
        <Navbar />
        <Switch>

          <Route exact path='/' component={Home}/>

          {/* <Route path='/instructions'>
            <Instructions rowsCols={this.state.rowsCols} handleBoardSize={this.handleBoardSize} />
          </Route> */}

          <Route path='/color-splash'>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <Instructions rowsCols={this.state.rowsCols} handleBoardSize={this.handleBoardSize} />
              <GameContainer rowsCols={this.state.rowsCols} handleClickCount={this.handleClickCount} clickCount={this.state.clickCount} boardUpdate={this.state.boardUpdate} decrementBoardUpdate={this.decrementBoardUpdate} />
            </div>
          </Route>

          <Route path='/score'>
            <HighScore clickCount={this.state.clickCount} />
          </Route>

          <Route path='/game-over'>
            <EndScreen />
          </Route>

          <Route path='/credits'>
            <Credits />
          </Route>

        </Switch>

      </div>
    )
  }
}

export default MainContainer