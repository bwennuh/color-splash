import React, { Component } from 'react';

const colorPalette = ['#6CC2BD', '#1b4668', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class PixelBG extends Component {

    state = {
        // x: this.props.idx,
        // y: this.props.row, 
        color: this.props.color,
    }

    changeColor = (color) => {
        this.setState({color})
    }

    render() {

        return (
            <div 
            // id={this.props.id}
            style={{width: '100px', height: '100px', padding: '0px', backgroundColor: this.state.color}} 
            className="col text-dark border">
            </div>
        )
    }
}

export default PixelBG