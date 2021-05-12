import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Credits extends Component {
  render(){
    return(
      <div>
        <h1>Credits</h1>

        <Link to='/'>
            <button id="play-button" className="rainbow-background">Home Page</button>
        </Link>

      </div>
    )
  }
}

export default Credits