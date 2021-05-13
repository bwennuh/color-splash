import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Credits extends Component {
  render(){
    return(
      <div>
        <h1 className='credits'>
          <span>C</span>
          <span>R</span>
          <span>E</span>
          <span>D</span>
          <span>I</span>
          <span>T</span>
          <span>S</span>
        </h1>

        <div id='credits'>
          <h2 className='names'>James Chen</h2>
          <p className='credit-info'>Array Master</p>
          <h2 className='names'>Brenna Bruening</h2>
          <p className='credit-info'>Rainbow Coordinator</p>
          <h2 className='names'>Adam Johnson</h2>
          <p className='credit-info'>React Guru</p>
          <h2 className='names'>Flatiron School</h2>
          <p className='credit-info'>Project Assigner</p>
        </div>

        <Link to='/'>
            <button id="play-button" className="rainbow-background">Home Page</button>
        </Link>

      </div>
    )
  }
}

export default Credits