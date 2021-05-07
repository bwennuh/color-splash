import React, { Component } from 'react';

class HighScore extends Component {
  render(){
    return(
      <div>
        <h1>HighScore</h1>
        <form onSubmit={this.props.handleScoreSubmit}>
          <input type="text" placeholder="Enter a name"/>
        </form>
        <h3>You used {10} turns </h3>
      </div>
    )
  }
}

export default HighScore