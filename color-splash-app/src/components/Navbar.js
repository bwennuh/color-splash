import React, { Component } from 'react';

export default class Navbar extends Component {
  render(){
    return(
      <div className="container" style={{margin: '0', padding: '0', width: '100vw'}}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{width: '100vw', backgroundColor: '#282528'}}>
          <a className="navbar-brand" style={{color: 'white', fontWeight: 'bold', fontSize: '20pt', marginLeft: '50px'}} href="/">Home</a>
        </nav>
      </div>
    )
  }
}