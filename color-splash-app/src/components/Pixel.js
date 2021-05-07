import React, { Component } from 'react';

const colorPalette = ['#6CC2BD', '#5A809E', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Pixel extends Component {

    state = {
        x: this.props.idx,
        y: this.props.row 
    }

    render() {
        return <div style={{width: '8px', height: '20px'}} className="col text-dark bg-success border"></div>
    }
}

export default Pixel