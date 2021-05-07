import React, { Component } from 'react';
import Home from '../components/Home.js'
import Instructions from '../components/Instructions.js'
import Game from '../components/Game.js'
import HighScore from '../components/HighScore.js'
import EndScreen from '../components/EndScreen.js'
import Credits from '../components/Credits.js'

class MainContainer extends Component {
  render(){
    return(
      <div>
        <h1>Main Container</h1>
        <Home />
        <Instructions />
        <Game />
        <HighScore />
        <EndScreen />
        <Credits />
      </div>
    )
  }
}

export default MainContainer