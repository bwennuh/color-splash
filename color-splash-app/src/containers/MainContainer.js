import React, { Component } from 'react';
import Home from '../components/Home.js'
import Instructions from '../components/Instructions.js'
import Game from '../components/Game.js'
import HighScore from '../components/HighScore.js'
import EndScreen from '../components/EndScreen.js'
import Credits from '../components/Credits.js'

class MainContainer extends Component {

  handleScoreSubmit = (event) => {
    event.preventDefault()
    const input = event.target.children[0]
    // User's nickname
    console.log(input.value)
    // Reset field
    input.value = ""
  }

  render(){
    return(
      <div>
        <h1>Main Container for Color Splash</h1>
        <Home />
        <Instructions />
        <Game />
        <HighScore handleScoreSubmit={this.handleScoreSubmit}/>
        <EndScreen />
        <Credits />
      </div>
    )
  }
}

export default MainContainer