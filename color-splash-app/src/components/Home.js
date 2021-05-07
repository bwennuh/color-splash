import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <div id="home">
          <div id="color-splash">
            <span style={{color: "red"}}>C</span>
            <span style={{color: "blue"}}>o</span>
            <span style={{color: "orange"}}>l</span>
            <span style={{color: "green"}}>o</span>
            <span style={{color: "purple"}}>r </span>

            <span style={{color: "blue"}}>S</span>
            <span style={{color: "orange"}}>p</span>
            <span style={{color: "green"}}>l</span>
            <span style={{color: "red"}}>a</span>
            <span style={{color: "purple"}}>s</span>
            <span style={{color: "green"}}>h</span>
          </div>
            <button id="play-button" className="rainbow-background">Click to Play</button>

        </div>
      </div>
    )
  }
}

export default Home