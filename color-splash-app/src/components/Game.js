import React, { Component } from 'react';
import Pixel from './Pixel'


const colorPalette = ['#6CC2BD', '#5A809E', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Game extends Component {

  state = {
    rowsCols: 12
  }

  initializeArray = () => Array(this.state.rowsCols).fill().map((element,index)=>index)
  reverseArray = () => Array(this.state.rowsCols).fill().map((element,index)=>this.state.rowsCols - index -1)
  
  generateMatrix = () => {
    let initialArray = this.reverseArray()
    const matrix = initialArray.map(row => <div key={initialArray.indexOf(row)} className='row'>{this.generateRow(row)}</div>)
    // console.log(matrix)
    return matrix
  }

  generateRow = (rowNum) => {
    let initialArray = this.initializeArray()
    const row = initialArray.map((elem, idx) => <Pixel idx={idx} row={rowNum} color={this.getRandomColor()}/>)
    return row
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    //The maximum is exclusive and the minimum is inclusive
  }

  getRandomColor = (num) => {
      let randomColor = colorPalette[this.getRandomInt(0,6)]
      return randomColor
  }

  render(){
    return(
      <div style={{maxWidth: '70vw', margin: 'auto'}} className='d-flex justify-content-center'>
        <div id='matrix' style={{textAlign: 'center'}}>
          {this.generateMatrix()}
        </div>
      </div>
    )
  }
}

export default Game