import React, { Component } from 'react';

class EndScreen extends Component {
  render(){
    return(
      <div>
        <h1>EndScreen</h1>
        <h2 onClick={()=>console.log('Bring me to home page')}>Play Again?</h2>
      </div>
    )
  }
}

export default EndScreen