import React, { Component } from 'react';
import Pixel from './Pixel'


const colorPalette = ['#6CC2BD', '#5A809E', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Game extends Component {

  state = {
    rowsCols: 4,
    pixelColorNumbers: [],
    pixelColorMap: [],    
    pixelLocations: [],       
    splashPixels: [],
    splashColor: '#5A809E',
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
  
  initializeColorArray = () => {
    // initialize array
    let pixelColorNumbers = new Array(this.state.rowsCols).fill().map((element,index)=> {
      return new Array(this.state.rowsCols).fill(0)
    })
    // set color values to array
    pixelColorNumbers.map((item,idx) => item.map((elem,index)=> {
      pixelColorNumbers[index][idx] = this.getRandomInt(0,6)
    }))
    this.setState({ pixelColorNumbers })
    return pixelColorNumbers
  }

  setColor = () => {
    // this method is called in Pixel
    // whenever colorNumbers exists, change pixel color
    
  }

  generateMatrix = () => {
    let initialArray = this.reverseArray()
    const matrix = initialArray.map(row => <div key={initialArray.indexOf(row)} className='row'>{this.generateRow(row)}</div>)
    return matrix
  }

  generateRow = (rowNum) => {
    let initialArray = this.initializeArray()
    // console.log(this.state.pixelColorNumbers)
    const row = initialArray.map((elem, idx) => {
      return <Pixel key={idx+", "+rowNum}
                    id={idx+", "+rowNum}
                    idx={idx} 
                    row={rowNum} 
                    color={this.getRandomColor()} 
                    splashColor={this.state.splashColor}
                    setSplashColor={this.setSplashColor}
                    handlePixelClick={this.handlePixelClick}
                    pixels={this.state.pixels}
                    pixelColorNumbers={this.pixelColorNumbers}/>
    }) // colorPalette[this.state.pixelColorNumbers[idx][rowNum]]
    return row
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    //The maximum is exclusive and the minimum is inclusive
  }

  getRandomColor = () => {
      const randomColor = colorPalette[this.getRandomInt(0,6)]
      return randomColor
  }

  initializeColorMap = () => {
    // initialize array
    let pixelColorMap = new Array(this.state.rowsCols).fill().map((element,index)=> {
      return new Array(this.state.rowsCols).fill(0)
    })
    // set color values to array
    if(this.state.pixelColorNumbers.length!==0) {
      pixelColorMap.map((item,idx) => item.map((elem,index)=> {
        pixelColorMap[index][idx] = this.state.pixelColorNumbers[index][idx]
      }))
    }
    this.setState({ pixelColorMap })
    return pixelColorMap

    this.state.pixelColorNumbers.map(item => {})
  }

  genMatrixV2 = () => {
    // convert colorNumber to colorMap
    this.state.pixelColorNumbers.map((item,idx)=> <div key={idx} className="row">{this.genRowsV2(item)}</div>)
  }

  genRowsV2 = (vals) => {
    vals.map((val, idx) => <Pixel key={idx} color={val} selectedColor={this.state.splashColor}/>)
  }

  componentDidMount() {
    this.createArray()
    this.initializeColorArray()
    this.initializeColorMap()
    this.createPixelsHolder()
    // print original block
  }

  render(){
    // console.log(this.state.pixelLocations.length)
    // console.log(this.state.pixelColorNumbers.length)
    // console.log(this.state.pixels.length)
    // console.log(this.state.pixelColorNumbers.length)
    // console.log(this.state.pixelColorMap.length)

    return(
      <div style={{maxWidth: '70vw', margin: 'auto'}} className='d-flex justify-content-center'>
        <div id='matrix' style={{textAlign: 'center'}}>
          {/*this.state.pixels.map(element => element)  printing all pixels */}
          {this.state.pixels.map(element => element)}
          {this.state.pixelColorNumbers.length!==0? console.log(this.state.pixelColorNumbers) : null}
          {this.state.pixelColorNumbers.length!==0? this.state.pixels.map(element => element) : null}
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

// set x,y coordinate in colorNumbers to num
// if(this.state.pixelColorNumbers.length!==0) {
//   this.setState(state => {
//     state.pixelColorNumbers.push(num);
//     return state
//   })
// }