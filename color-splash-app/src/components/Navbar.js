import React, { Component } from 'react';

export default class Navbar extends Component {
  render(){
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light rainbow-background">
          <a className="navbar-brand" style={{color: '#1b4668', fontWeight: 'bold', fontSize: '24pt', marginLeft: '50px'}} href="/">Color Splash Game</a>
        </nav>
      </div>
    )
  }
}