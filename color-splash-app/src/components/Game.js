import React, { Component } from 'react';
import Pixel from './Pixel'


const colorPalette = ['#6CC2BD', '#5A809E', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Game extends Component {

  state = {
    rowsCols: 3,
    pixelColorNumbers: [],
    pixelLocations: [],
    splashPixels: [],
    splashColor: '',
    pixels: []
  }

  // Make intial location array in state
  createArray = () => {
    // initialize array
    let testArray = new Array(this.state.rowsCols).fill().map((element,index)=> {
      return new Array(this.state.rowsCols).fill(0)
    })
    // fill out array
    const n = this.state.rowsCols
    testArray.map((elem,idx)=>testArray[idx]=testArray[idx].fill(idx).map((elem,ind,arr) => (ind+" "+(n-1-arr[0]))))
    // Update our state to reflect intitial values
    this.setState({pixelLocations: testArray})
  }

  createPixelsHolder = () => {
    const pixels = this.generateMatrix()
    console.log(pixels)
    this.setState({ pixels })
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
    const row = initialArray.map((elem, idx) => {
      if (idx === 0 && rowNum === 0){
        return <Pixel id="start-pixel" key={idx+", "+rowNum} idx={idx} row={rowNum} color={this.getRandomColor()} splashColor={this.state.splashColor}/>
      } else {
        return <Pixel key={idx+", "+rowNum} idx={idx} row={rowNum} color={this.getRandomColor()} splashColor={this.state.splashColor}/>
      }
    })
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

  componentDidMount() {
    this.createArray()
    this.createPixelsHolder()
  }

  render(){
    return(
      <div style={{maxWidth: '70vw', margin: 'auto'}} className='d-flex justify-content-center'>
        <div id='matrix' style={{textAlign: 'center'}}>
          {this.state.pixels.map(element => element) /* printing all pixels */}
        </div>
      </div>
    )
  }
}

export default Game