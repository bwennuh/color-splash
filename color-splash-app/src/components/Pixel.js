import React, { Component } from 'react';

class Pixel extends Component {

    state = {
        x: this.props.idx,
        y: this.props.row, 
        color: this.props.color,
        splash: ''
    }

    makePixelGroup = () => {
        
    }

    render() {
        console.log(this.props.color)
        return (
            <div style={{width: '36px', height: '36px', padding: '0px', backgroundColor: this.state.color}} className="col text-dark border">
            </div>
        )
    }
}

export default Pixel