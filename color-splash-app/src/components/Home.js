import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <div id="home">
          <div id="color-splash">
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
            <button id="play-button" className="rainbow-background">Click to Play</button>

        </div>
      </div>
    )
  }
}

export default Home
