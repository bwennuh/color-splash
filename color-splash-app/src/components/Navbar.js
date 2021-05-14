import React, { Component } from 'react';
import ReactLoading from "react-loading";

export default class Navbar extends Component {

  state = {
    audio: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'),
    playing: false
  }

  playSound = (url) => {
    this.state.audio.play()
    this.setState({playing: true})
  }

  muteSound = () => {
    this.state.audio.pause()
    this.setState({playing: !this.state.playing})
    // console.log(this.state.playing)
  }

  render(){
    return(
      <div className="container" style={{margin: '0', padding: '0', width: '100vw'}}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{width: '100vw', backgroundColor: '#282528'}}>
          <a className="navbar-brand" style={{color: 'white', fontWeight: 'bold', fontSize: '20pt', marginLeft: '50px'}} href="/"><div id='navbar-home'>HOME</div></a>
          <button id='audioBtn' onClick={()=>this.playSound('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')} className="btn btn-primary" style={{width: '10%', marginLeft: '50vw'}}>Sound on</button>
          <button id='audioBtn' onClick={this.muteSound} className="btn btn-dark" style={{width: '10%', marginLeft: '2vw', marginRight: '2vw'}}>Mute</button>
          {this.state.playing? <ReactLoading type='bars' color='#fff'/> : console.log()}
        </nav>
      </div>
    )
  }
}