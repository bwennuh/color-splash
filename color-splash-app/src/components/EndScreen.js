import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EndScreen extends Component {
  render(){
    return(
      <div>
        <h1>EndScreen</h1>

        <Link to='/color-splash'>
          <h2 onClick={()=>console.log('Bring me to home page')}>Play Again?</h2>
        </Link>

        <Link to='/credits'>
            <button id="play-button" className="rainbow-background">Credits</button>
        </Link>

      </div>
    )
  }
}

export default EndScreen