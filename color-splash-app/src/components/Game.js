import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Pixel from './Pixel'

const colorPalette = ['#6CC2BD', '#1B4668', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Game extends Component {

  state = {
    pixelColorNumbers: [], 
    pixelLocations: [],       
    splashPixels: [],
    splashColor: '',
    pixels: [],
    updated: 0,
  }

  pixelReferences = Array(this.props.rowsCols).fill().map(()=> Array(this.props.rowsCols).fill().map(()=>React.createRef()))

  // Make initial location array in state
  createArray = () => {            
    // initialize array
    let testArray = new Array(this.props.rowsCols).fill().map((element,index)=> {
      return new Array(this.props.rowsCols).fill(0)
    })
    // fill out array
    const n = this.props.rowsCols
    testArray.map((elem,idx)=>testArray[idx]=testArray[idx].fill(idx).map((elem,ind,arr) => (ind+" "+(n-1-arr[0]))))
    // Update our state to reflect intitial values
    this.setState({pixelLocations: testArray})
  }

  // Add all pixels to state
  createPixelsHolder = () => {
    const pixels = this.generateMatrix()
    this.setState({ pixels })
    this.setState({updated: +this.state.updated+1})
    console.log('generating matrix...')
  }

  initializeArray = () => Array(this.props.rowsCols).fill().map((element,index)=>index)
  reverseArray = () => Array(this.props.rowsCols).fill().map((element,index)=>this.props.rowsCols - index -1)

  initializeColorArray = () => {
    // initialize array
    let pixelColorNumbers = new Array(this.props.rowsCols).fill().map((element,index)=> {
      return new Array(this.props.rowsCols).fill(0)
    })
    // set color values to array
    pixelColorNumbers.map((item,idx) => item.map((elem,index)=> {
      pixelColorNumbers[index][idx] = this.getRandomInt(0,6)
    }))
    this.setState({ pixelColorNumbers })
    return pixelColorNumbers
  }

  initializeSplashPixels= () => {
    const splashPixels = Array(this.props.rowsCols).fill().map(elem => Array(this.props.rowsCols).fill(false))
    // change origin to true
    splashPixels[this.props.rowsCols-1][0]= true
    this.setState({splashPixels})
  }

  getHexColor = (event) => {
    let colorRGB = event.target.style.backgroundColor
    let splitRGB = colorRGB.slice(4, colorRGB.length-1)
    let rgbArray = splitRGB.split(", ")
    let hexNumber = ("#" + (+rgbArray[0]).toString(16) + (+rgbArray[1]).toString(16) + (+rgbArray[2]).toString(16)).toUpperCase()
    return hexNumber
  }

  handlePixelClick = (event) => {
    const n = this.props.rowsCols
    const x = event.target.id.split(", ")[0]
    const y = event.target.id.split(", ")[1]

    // if click not 0,0 change 0,0's color to match, and set state
    if(x+y>0) {

      console.log(x+', '+y)

      this.props.handleClickCount()

      // old method
      {
        // // Set 0,0 color to selected color
      // const hexNumber = this.getHexColor(event)
      // // Origin block is being changed in Pixel

      // // Update the splash color state to be equal to the selected color
      // this.setState({splashColor: hexNumber})

      // // Update splashPixels to include all pixels that have same color
      // let copy = [...this.state.splashPixels]
      // const colorIndex = colorPalette.indexOf(hexNumber)
      // // if colorIndex (or splash color) equals current item, set same value in splashPixels
      // this.state.pixelColorNumbers.map((item,index) => item.map((item2,index2)=> {
      //   // if equal
      //   item2 === colorIndex? copy[index][index2] = true : console.log()
      //   // set value
      // }))
      // this.setState({splashPixels: copy})
    }
      
      // new method
      // Set 0,0 color to selected color
      const hexNumber = this.getHexColor(event)
      // Origin block is being changed in Pixel

       // Update the splash color state to be equal to the selected color
      this.setState({splashColor: hexNumber})

      // update the true/false values
      // keeping doing below until no neighbors have same color
      //    if any surrounding block is false, go to next condition
      //    check if neighbors are same color
      
      let copy = [...this.state.splashPixels]
      const colorNumbers = this.state.pixelColorNumbers
      const colorIndex = colorPalette.indexOf(hexNumber)

      // check whether neighbors are true or false
      // debugger

      // test do while loop
      let fulfilled
      do {
        fulfilled = false

        copy.map((item,index) => item.map((item2,index2) => {
          const xPt = index2       // converting to (x,y)
          const yPt = n-index-1
          // console.log(index2+" "+index)
        if(item2 === true) {          // if splashPixel pixel is true
          // check up
          if (yPt+1 <= n-1) {     // check y coord not out of bounds 
            if(colorIndex == colorNumbers[n-(yPt+1)-1][xPt] && copy[n-(yPt+1)-1][xPt] == false) {     // check if up color matches colorIndex
              console.log(xPt+', '+yPt) // if this outputs to console, this pixel is eligible to change its up color
              copy[-(yPt+1)-1+n][xPt] = true
              fulfilled = true
            }
          }
          // check right
          if (xPt+1 <= n-1) { // check x+ coord not out of bounds
            if(colorIndex == colorNumbers[n-yPt-1][xPt+1] && copy[n-yPt-1][xPt+1] == false) {
              console.log(xPt+', '+yPt)
              copy[n-yPt-1][xPt+1] = true
              fulfilled = true
            }
          }
          // check bottom
          if (yPt-1 >= 0) { // check y- coord not out of bounds
            if(colorIndex == colorNumbers[n-(yPt-1)-1][xPt] && copy[n-(yPt-1)-1][xPt] == false) {
              console.log(xPt+', '+yPt)
              copy[n-(yPt-1)-1][xPt] = true
              fulfilled = true
            }
          }
          // check left
          if (xPt-1 >= 0) { // check x- coord not out of bounds
            if(colorIndex == colorNumbers[n-yPt-1][xPt-1] && copy[n-yPt-1][xPt-1] == false) {
              console.log(xPt+', '+yPt)
              copy[n-yPt-1][xPt-1] = true
              fulfilled = true
            }
          }
        }
        }))

      } while(fulfilled===true)

      // debugger

      // Update the color $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      console.log(this.state.splashPixels)
      // map over splashPixels, if pixel is true, then change color to splash color
      this.state.splashPixels.map((item,index)=> item.map((item2,index2)=> {
        if(item2 === true) {
          // change color
          // console.log(index2+', '+(n-index-1))
          document.getElementById(index2+', '+(n-index-1)).style.backgroundColor = hexNumber
        }
      }))

      return hexNumber
    } else {
      let startPixel = document.getElementById("0, 0")
      this.setState({splashColor: startPixel.style.backgroundColor})

      let hexNumber = this.state.splashColor
      return hexNumber
    }
  }

  generateMatrix = () => {
    let initialArray = this.reverseArray()  // [3,2,1,0]
    const matrix = initialArray.map(row => <div key={initialArray.indexOf(row)} className='row'>{this.generateRow(row)}</div>)
    return matrix
  }

  generateRow = (rowNum) => {
    let initialArray = this.initializeArray()
    const row = initialArray.map((elem, idx) => {
      return <Pixel key={idx+", "+rowNum}
                    id={idx+", "+rowNum}
                    idx={idx} 
                    row={rowNum} 
                    ref={this.pixelReferences[rowNum][idx]}
                    color={this.getRandomColor()}     // supposed to be whatevers in pixelColorNumbers BUt it doesn't exist until like half way through
                    rowsCols={this.props.rowsCols}
                    splashColor={this.state.splashColor}
                    setSplashColor={this.setSplashColor}
                    handlePixelClick={this.handlePixelClick}
                    pixels={this.state.pixels}
                    pixelColorNumbers={this.state.pixelColorNumbers}/>
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

  componentDidMount() {
    this.initializeSplashPixels()
    this.createArray()
    this.initializeColorArray()
    this.createPixelsHolder()
    // print original block
    console.log('update state: ' + this.state.updated)
  }

  componentDidUpdate() {
    const n = this.props.rowsCols
    console.log('update state: ' + this.state.updated)
    if(this.state.updated === 1) {
      this.createPixelsHolder()
      this.setState({splashColor: this.state.pixelColorNumbers[this.props.rowsCols-1][0]})
      // fix colors here??
      console.log(this.state.pixelColorNumbers)
      console.log(this.state.pixelLocations)
      const pixel = this.pixelReferences
      this.state.pixelLocations.map((item,index) => item.map((item2,index2)=> {
        // console.log(pixel[n-index2-1][index].current.state.color + ' ' + pixel[n-index2-1][index].current.state.x + ',' + pixel[n-index2-1][index].current.state.y)
        // Now we need to match the current game board to our Color Map which is pixelColorNumbers
        pixel[n-index2-1][index].current.changeColor(colorPalette[this.state.pixelColorNumbers[index2][index]])
      }))

    }

    if (this.props.boardUpdate > 0){
      console.log('Testing board update rendering')
      this.pixelReferences = Array(this.props.rowsCols).fill().map(()=> Array(this.props.rowsCols).fill().map(()=>React.createRef())) // initializing 
      console.log(this.props.rowsCols)
      this.props.decrementBoardUpdate()
      this.initializeSplashPixels()
      this.createArray()
      this.initializeColorArray()
      this.createPixelsHolder()
      this.setState({updated: +this.state.updated-1})
      console.log(this.state.updated)
    }
    
  }


  render(){
    // console.log(`Board update count: ${this.props.boardUpdate}`)
    return(
      <div>
        <div style={{maxWidth: '100vw', margin: 'auto'}} className='d-flex justify-content-center'>
          <div id='matrix' style={{textAlign: 'center'}}>
            {/*this.state.pixels.map(element => element)  printing all pixels */}
            {this.state.pixels.map(element => element)}
            {/* {this.state.pixelColorNumbers.length!==0? console.log(this.state.pixelColorNumbers) : null} */}
          </div>
        </div>

        <div id='click-count'>
          <h3 className='splash-board'>You have used {this.props.clickCount} turns </h3>
        </div>

        <Link to='/score'>
            <button id="play-button" className="rainbow-background">See Score</button>
        </Link>

      </div>
    )
  }
}

export default Game