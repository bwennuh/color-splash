import React, { Component } from 'react';

class Instructions extends Component {
  render(){
    return(
      <div>
        <h1>Instructions</h1>
        <h2>COLOR SPLASH</h2>

        <div className="instruction-list">
          <h3><span style={{color: "#5A809E"}}>Game Play Instructions:</span></h3>
          <ol>
            <li>
              The goal of the game is to <span style={{color: "#5A809E"}}>~ Splash ~</span> the entire playing board by getting it to turn all one color!
            </li>
            <li>
              The board game will start out with each square on the board being one of 6 random colors.
            </li>
            <li>
              The <span style={{color: "#5A809E"}}>Splash</span> is going to start at the bottom left hand corner of the screen, and should eventually take over the entire playing board.
            </li>
            <li>
            Clicking on any square on the game board will change the <span style={{color: "#5A809E"}}>Splash</span> to that same color.
            </li>
            <li>
            The <span style={{color: "#5A809E"}}>Splash</span> will take over any adjacent squares that also match the color that was clicked, increasing the <span style={{color: "#5A809E"}}>Splash</span> overall size.
            </li>
            <li>
            As the <span style={{color: "#5A809E"}}>Splash</span> grows, it will eventually take over over every square on the board, and once the final square has been taken over by the Splash the game is over!
            </li>
            <li>
              The player's score will be based on the number of color change clicks needed to have the <span style={{color: "#5A809E"}}>Splash</span> take over the entire board.
            </li>
            <li>
              At the end of the game, be sure to input your name to have your score saved, and make sure to play again to see if you can beat it!
            </li>
          </ol>
        </div>

        <div id='select-board-size'>
        <select onChange={(event) => this.props.handleBoardSize(+event.target.value)}
                  className="custom-select my-1 mr-sm-2">
            <option selected disabled>Choose Board Size</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>


      </div>
    )
  }
}

export default Instructions