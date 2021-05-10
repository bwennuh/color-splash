import React, { Component } from 'react';

class Pixel extends Component {

    state = {
        x: this.props.idx,
        y: this.props.row, 
        color: this.props.color,
        isSplash: false
    }

    handleClick = (event) => {
        console.log(this.state.color)
        const startPixel = document.querySelector("#start-pixel")
        console.log(startPixel)

        startPixel.style.backgroundColor = this.state.color
        //method

    }

    render() {
        return (
            <div 
            id={this.props.id}
            style={{width: '72px', height: '72px', padding: '0px', backgroundColor: this.state.color}} 
            className="col text-dark border"
            onClick={this.handleClick}
            >
            </div>
        )
    }
}

export default Pixel