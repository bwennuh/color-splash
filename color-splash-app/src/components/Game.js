import React, { Component } from 'react';
import Pixel from './Pixel'

class Game extends Component {

  state = {
    rowsCols: 12
  }

  initializeArray = () => Array(this.state.rowsCols).fill().map((element,index)=>index)
  reverseArray = () => Array(this.state.rowsCols).fill().map((element,index)=>this.state.rowsCols - index -1)
  
  generateMatrix = () => {
    let initialArray = this.reverseArray()
    const matrix = initialArray.map(row => <div key={initialArray.indexOf(row)} className='d-flex flex-column'>Row{this.generateRow(row)}</div>)
    // console.log(matrix)
    return matrix
  }

  generateRow = (rowNum) => {
    let initialArray = this.initializeArray()
    const row = initialArray.map((elem, idx) => <Pixel idx={idx} row={rowNum}/>)
    return row
  }

  render(){
    return(
      <div>
        <h1>Game</h1>
        <div id='matrix' style={{textAlign: 'center'}}>
          {this.generateMatrix()}
        </div>
      </div>
    )
  }
}

export default Game