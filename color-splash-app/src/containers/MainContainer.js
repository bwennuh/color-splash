import React, { Component } from 'react';
import { Switch, Route, Link, Router } from 'react-router-dom'

import Home from '../components/Home.js'
import Instructions from '../components/Instructions.js'
import GameContainer from '../containers/GameContainer.js'
import HighScore from '../components/HighScore.js'
import EndScreen from '../components/EndScreen.js'
import Credits from '../components/Credits.js'
import Navbar from '../components/Navbar.js'
import PixelBG from '../components/PixelBG.js';

const colorPalette = ['#6CC2BD', '#1b4668', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']
const initMap = [[5,0,1,4,0,1,5,2,2,3,2,5],[0,3,2,5,5,3,1,3,4,0,3,3],[1,4,1,0,1,5,5,4,1,4,5,3],[3,5,3,3,4,0,1,3,4,2,5,3],[1,5,4,0,1,3,5,2,3,1,4,5],[2,5,2,5,5,1,2,0,5,3,4,5],[2,3,5,0,4,2,3,5,0,4,4,1],[3,4,3,4,1,5,0,1,2,5,2,2],[3,1,3,2,0,2,5,5,1,4,3,1],[4,5,5,2,5,0,1,3,0,4,4,4],[4,0,1,2,4,0,0,0,0,2,0,3],[4,2,5,3,0,1,0,5,4,1,0,0]]

class MainContainer extends Component {

  state = {
    clickCount: 0,
    score: 0,
    rowsCols: 4,
    boardUpdate: 0,
    intervalId: '',
    testBG: '',
    testJSX: initMap.map((row,r)=><div className='row'>{Array(12).fill().map((i,c)=> <div style={{width: '100px', height: '100px', padding: '0px', backgroundColor: colorPalette[initMap[r][c]]}} className="col text-dark border"></div>)}</div>),
    value: <div>test</div>
  }

  handleClickCount = () => {
    let clicks = this.state.clickCount
    clicks = clicks + 1
    // console.log(`Clicked ${clicks} times`)
    this.setState({clickCount: clicks})
  }

  changeBoardSize = (number) => {
    console.log(number)

    this.setState({
      rowsCols: number
    })
  }

  incrementBoardUpdate = () => {
    let boardUpdateCount = this.state.boardUpdate
    boardUpdateCount = boardUpdateCount + 1
    console.log(`Board updates: ${boardUpdateCount}`)

    this.setState({boardUpdate: boardUpdateCount}) 
  }

  decrementBoardUpdate = () => {
    let boardUpdateCount = this.state.boardUpdate
    boardUpdateCount = boardUpdateCount - 1
    console.log(`Board updates: ${boardUpdateCount}`)

    this.setState({boardUpdate: boardUpdateCount})
  }

  handleBoardSize = (number) => {
    this.changeBoardSize(number)

    this.incrementBoardUpdate()

    // this.forceUpdate()
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    //The maximum is exclusive and the minimum is inclusive
  }

  generateRow = (rowNum,size,pCN) => {
    let initialArray = Array(size).fill().map((element,index)=>index)
    // console.log(pCN)
    const row = initialArray.map((elem, idx) => {
      return <PixelBG key={idx+", "+rowNum}
                    id={idx+", "+rowNum}
                    idx={idx} 
                    row={rowNum} 
                    color={colorPalette[pCN[rowNum][idx]]}/>
    })
    return row
  }

  createColorMap = () => {
    // create color map!
    //    initialize array
    const size = 12
    let pixelColorNumbers = Array(size).fill().map((element,index)=> {
      return Array(size).fill()
    })
    // set color values to array
    pixelColorNumbers.map((item,idx) => item.map((elem,index)=> {
      pixelColorNumbers[index][idx] = this.getRandomInt(0,6)
    }))
    return pixelColorNumbers

  }

  displayColorMap = (colorMap) => {
    // display color map
    const size = 12
    let initialArray = Array(size).fill().map((element,index)=> size-index-1 )  // [3,2,1,0]
    const matrix = initialArray.map(row => <div key={initialArray.indexOf(row)} className='row'>{this.generateRow(row,size,colorMap)}</div>)
    return matrix

  }

  createPixelBG = () => {
    // create color map!
    //    initialize array
    const size = 12
    let pixelColorNumbers = Array(size).fill().map((element,index)=> {
      return Array(size).fill()
    })
    // set color values to array
    pixelColorNumbers.map((item,idx) => item.map((elem,index)=> {
      pixelColorNumbers[index][idx] = this.getRandomInt(0,6)
    }))

    // display color map
    let initialArray = Array(size).fill().map((element,index)=> size-index-1 )  // [3,2,1,0]
    const matrix = initialArray.map(row => <div key={initialArray.indexOf(row)} className='row'>{this.generateRow(row,size,pixelColorNumbers)}</div>)
    return matrix

  }

  interval = (colorMap) => {
    const int = colorMap.map((row,index) => <div key={index} className='row'>{row.map((column,index2) => {
      return <PixelBG key={index2+", "+index}
                id={index2+", "+index}
                color={colorPalette[colorMap[index][index2]]}/>
    })}</div>)
    return int
  }

  componentDidMount() {
    let intervalId = setInterval(()=> {
      const map = this.createColorMap()                                        
      this.setState({testBG: map, testJSX: map.map((row,r)=><div className='row'>{Array(12).fill().map((i,c)=> <div style={{width: '100px', height: '100px', padding: '0px', backgroundColor: colorPalette[map[r][c]]}} className="col text-dark border"></div>)}</div>)})
    }, 2000)
    this.setState({intervalId})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render(){
    return(
      <div className='d-flex row justify-content-center text-center align-self-center' style={{height: '100vh', margin: '0', padding: '0'}}>
        <div className='box' style={{margin: '0', padding: '0'}}>
          <Navbar />
          <Switch>

            <Route exact path='/' component={Home}/>

            <Route path='/color-splash'>
              <div className='d-flex flex-row justify-content-around align-items-center' style={{padding: '0 10%'}}>
                <Instructions rowsCols={this.state.rowsCols} handleBoardSize={this.handleBoardSize} />
                <GameContainer rowsCols={this.state.rowsCols} handleClickCount={this.handleClickCount} clickCount={this.state.clickCount} boardUpdate={this.state.boardUpdate} decrementBoardUpdate={this.decrementBoardUpdate} />
              </div>
            </Route>

            <Route path='/score'>
              <HighScore clickCount={this.state.clickCount} />
            </Route>

            <Route path='/game-over'>
              <EndScreen />
            </Route>

            <Route path='/credits'>
              <Credits />
            </Route>

          </Switch>
        </div>

        <div className='d-flex flex-column justify-content-center  cover box2' style={{margin: '0'}} >
          {/* <div>{this.state.testBG}</div> */}
          <div>{this.state.testJSX}</div>
          {/* {console.log(this.state.testJSX)} */}
          {/* <div id='BG'>{this.state.testJSX}</div> */}
          {/* {this.state.testBG.length !== undefined? this.interval(this.state.testBG) : console.log('do nothing')} */}
        </div>
      </div>
    )
  }
}

export default MainContainer