import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const BASE_URL = 'http://localhost:3001/highscores'

class Home extends Component {

  state = {
    highscores: []
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

    allScores.sort((score1, score2) => (
      score1[1]-score2[1]
      // if (score1.score < score2.score){
      //   return -1
      // } else if (score1.score > score2.score){
      //   return 1
      // } else {
      //   return 0
      // }
    ))

    const topThreeScores = allScores.slice(0,3)
    // console.log(topThreeScores)
    return (topThreeScores.map(score => <h3>{score[0]}: {score[1]}</h3>))
  }

  render(){
    return(
      <div className="d-flex flex-column" style={{zIndex: '2', height: '100%', paddingTop: '8%'}}>
        <div id="home">
          <div id="color-splash" >
            <span style={{color: "#6CC2BD"}}>C</span>
            <span style={{color: "#5A809E"}}>O</span>
            <span style={{color: "#1b4668"}}>L</span>
            <span style={{color: "#F57D7C"}}>O</span>
            <span style={{color: "#FFC1A6"}}>R </span>
            <span style={{color: "#6CC2BD"}}>S</span>
            <span style={{color: "#FFC1A6"}}>P</span>
            <span style={{color: "#F57D7C"}}>L</span>
            <span style={{color: "#6CC2BD"}}>A</span>
            <span style={{color: "#1b4668"}}>S</span>
            <span style={{color: "#5A809E"}}>H</span>
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
