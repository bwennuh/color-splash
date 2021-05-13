import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EndScreen extends Component {
  render(){
    return(
      <div>
        <div className='game-over' style={{marginTop: '5%', marginBottom: '2%'}}>
            {/* <span style={{color: "#6CC2BD"}}>G</span>
            <span style={{color: "#5A809E"}}>A</span>
            <span style={{color: "#1b4668"}}>M</span>
            <span style={{color: "#F57D7C"}}>E </span>
            <span style={{color: "#FFC1A6"}}>O</span>
            <span style={{color: "#6CC2BD"}}>V</span>
            <span style={{color: "#5A809E"}}>E</span>
            <span style={{color: "#1b4668"}}>R</span> */}

            <span id='color-splash'>G</span>
            <span id='color-splash'>A</span>
            <span id='color-splash'>M</span>
            <span id='color-splash'>E </span>
            <span id='color-splash'>O</span>
            <span id='color-splash'>V</span>
            <span id='color-splash'>E</span>
            <span id='color-splash'>R</span>
          </div>

        <Link to='/color-splash'>
          {/* <h2 onClick={()=>console.log('Bring me to home page')}>Play Again?</h2> */}
          <button id="play-button" className="rainbow-background">Play Again?</button>
        </Link>

        <br></br>

        <Link to='/credits'>
            <button id="play-button" className="rainbow-background">Credits</button>
        </Link>

      </div>
    )
  }
}

export default EndScreen