import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

// const pokemon = require("../public/Lo_Mimieux-Bo.mp3");
// import LoMimieux from '../public/Lo_Mimieux-Bo.mp3'

const BASE_URL = 'http://localhost:3001/highscores'
// const objectURL = URL.createObjectURL('LoMimieuxBo.mp3')

class Home extends Component {

  state = {
    highscores: [],
  }
  
  componentDidMount() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    // .then(pokeData => console.log(pokeData))
    .then(highscores => this.setState({highscores}))

    this.getTopThreeScores()
  }

  getTopThreeScores = () => {
    // console.log(this.state.highscores)
    let allScores = this.state.highscores.map((score) => [score.playerName, score.score])
    // console.log(allScores)

    allScores.sort((score1, score2) => (score1[1]-score2[1]))

    const topThreeScores = allScores.slice(0,3)
    // console.log(topThreeScores)
    return (topThreeScores.map(score => <h3>{score[0]}: {score[1]}</h3>))
  }

  render(){
    const src='LoMimieuxBo.mp3'
    return(
      <div className="d-flex flex-column" style={{zIndex: '2', height: '100%', paddingTop: '8%'}}>
        <div id="home">
          <div id="color-splash" >
            <span key={0} id='color-splash'>C</span>
            <span key={1} id='color-splash'>O</span>
            <span key={2} id='color-splash'>L</span>
            <span key={3} id='color-splash'>O</span>
            <span key={4} id='color-splash'>R </span>
            <span key={5} id='color-splash'>S</span>
            <span key={6} id='color-splash'>P</span>
            <span key={7} id='color-splash'>L</span>
            <span key={8} id='color-splash'>A</span>
            <span key={9} id='color-splash'>S</span>
            <span key={10} id='color-splash'>H</span>
          </div>
          <Link to='/color-splash'>
            <button id="play-button" className="rainbow-background">Click to Play</button>
          </Link>

        </div>

        <div id='high-score-list'>
          <h2 style={{color: ''}}>Current High Scores:</h2>
          {this.getTopThreeScores()}
        </div>

      </div>
    )
  }
}

export default Home