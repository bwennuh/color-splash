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

class MainContainer extends Component {

  state = {
    clickCount: 0,
    score: 0,
    rowsCols: 4,
    boardUpdate: 0
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
    const row = initialArray.map((elem, idx) => {
      return <PixelBG key={idx+", "+rowNum}
                    id={idx+", "+rowNum}
                    idx={idx} 
                    row={rowNum} 
                    color={colorPalette[pCN[rowNum][idx]]}/>
    })
    return row
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

  componentDidMount() {
    this.createPixelBG()
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
          {this.createPixelBG()}
        </div>
      </div>
    )
  }
}

export default MainContainer