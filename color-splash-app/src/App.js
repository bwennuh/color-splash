import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
