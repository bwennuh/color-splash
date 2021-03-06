import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const BASE_URL = 'http://localhost:3001/highscores'

class HighScore extends Component {

  state = {
    playerName: '',
    score: this.props.clickCount * 25,
    clickCount: this.props.clickCount,
    finalColor: ''
  }

  submitHandler = (e) => {
    e.preventDefault()

    this.handleScoreSubmit(e)
    console.log(this.state)

    //Make a reqObj
    const reqObj = {}
    reqObj.headers = {"Content-Type": "application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify({...this.state})

    //POST ---- /pokemon (index)
    fetch(BASE_URL, reqObj)
        .then(res => res.json())
        .then((score) => {
            this.setState({
              playerName: '',
              score: 0,
              clickCount: 0,
              finalColor: ''
            })
        })
  }

  handleScoreSubmit = (event) => {

    const input = event.target.children[0]
    // User's nickname
    console.log(input.value)
    // Reset field
    input.value = ""

    this.getClickCount()
    this.getScore()
  }

  getClickCount = () => {
    let clickCount = this.props.clickCount
    this.setState({clickCount})
    return clickCount
  }

  getScore = () => {
    let score = this.props.clickCount * 25
    this.setState({score})
    return score
  }

  render(){
    return(
      <div className="d-flex flex-column">
        <h1 className='thanks' style={{width: '50%', margin: 'auto', marginTop: '5%', marginBottom: '2%'}}>THANKS FOR PLAYING!</h1>
        <form onSubmit={this.submitHandler}>
          <input onChange={(e) => this.setState({playerName: e.target.value})} type="text" placeholder="Enter your name"/>
          <h3 className='score-info' style={{backgroundColor: 'white', width: '30%', margin: 'auto', marginTop: '2%'}}>You used {this.props.clickCount} turns </h3>
          <h3 className='score-info' style={{backgroundColor: 'white', width: '30%', margin: 'auto', marginBottom: '2%'}}>Your score is: {this.props.clickCount * 25}</h3>
          <button type='submit' id="play-button" className="rainbow-background">Submit Score</button>
        </form>
        <br></br>



        <Link to='/game-over'>
            <button id="play-button" className="rainbow-background">Game Over</button>
        </Link>

      </div>
    )
  }
}

export default HighScore