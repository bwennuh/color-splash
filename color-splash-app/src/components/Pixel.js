import React, { Component } from 'react';

class Pixel extends Component {

    state = {
        x: this.props.idx,
        y: this.props.row, 
        color: this.props.color,
        isSplash: false
    }

    render() {
        // if colorNumbers exists, say hi
        console.log(this.props.pixelColorNumbers)
        return (
            <div 
            id={this.props.id}
            style={{width: '72px', height: '72px', padding: '0px', backgroundColor: this.state.color}} 
            className="col text-dark border"
            onClick={(event) => this.props.handlePixelClick(event)}
            >
            </div>
        )
    }
}

export default Pixel