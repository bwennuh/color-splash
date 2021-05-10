import React, { Component } from 'react';
import Pixel from './Pixel'


const colorPalette = ['#6CC2BD', '#1b4668', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Game extends Component {

  state = {
    rowsCols: 4,
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

  // Add all pixels to state
  createPixelsHolder = () => {
    const pixels = this.generateMatrix()
    console.log(pixels)
    this.setState({ pixels })
  }

  setSplashColor = () => {
    
  }

  handlePixelClick = (event) => {
    const n = this.state.rowsCols
    const x = n-1-event.target.id.split(", ")[0]
    const y = event.target.id.split(", ")[1]

    // if click not 0,0 change 0,0's color to match, and set state
    if(x+y>0) {
      // Set 0,0 color to selected color
    }
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
      return <Pixel key={idx+", "+rowNum}
                    id={idx+", "+rowNum}
                    idx={idx} 
                    row={rowNum} 
                    color={this.getRandomColor()} 
                    splashColor={this.state.splashColor}
                    setSplashColor={this.setSplashColor}
                    handlePixelClick={this.handlePixelClick}
                    pixels={this.state.pixels}/>
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
    console.log(this.createPixelsHolder())
    // print original block
  }

  render(){
    if(this.state.pixels.length!==0)
      console.log(this.state.pixels[3].props.children[0].props.color)
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



// const n = this.state.rowsCols
//     const x = n-1-event.target.id.split(", ")[0]
//     const y = event.target.id.split(", ")[1]

//     // if click not 0,0 change 0,0's color to match, and set state
//     if(x+y>0) {
//       // Copying ... 
//       let clone = Object.assign([], this.state.pixels)
//       // Set 0,0 color to selected color
//       clone[0+n-1].props.children[0].props.color = clone[x].props.children[y].props.color 
//       console.log(clone)
//       // this.setState(state => {
//       //   state.pixels[0].props.children[0].props.color = 0
//       //   return state
//       // })
//     }