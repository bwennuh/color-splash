import React, { Component } from 'react';

const colorPalette = ['#6CC2BD', '#1b4668', '#5A809E', '#F57D7C', '#FFC1A6', '#FEE4C4']

class Pixel extends Component {

    state = {
        x: this.props.idx,
        y: this.props.row, 
        color: this.props.color,
        stage: 0
    }

    // once color number exists, map all values to each pixel once
    handleColor = () => {
        const x = this.state.x
        const y = this.state.y
        const n = this.props.rowsCols
        // if colorNumbers exists, set color (we need to move this code to avoid exceeding update depth)
        if(this.props.pixelColorNumbers.length === this.props.rowsCols) {
            if(this.state.stage === 0) {
                this.setState({stage: +this.state.stage+1, color: colorPalette[this.props.pixelColorNumbers[n-y-1][x]]})
                console.log(this.props.rowsCols)
            }
        }
    }

    handleClick = (event) => {
        const color = this.props.handlePixelClick(event)
        this.setState({ color })
        let startPixel = document.getElementById("0, 0")
        startPixel.style.backgroundColor = color
        // console.log(startPixel)
        // console.log(color)
    }

    changeColor = (color) => {
        this.setState({color})
    }

    render() {
        // this.handleColor()
        // console.log(this.state.stage + ' '+ this.props.rowsCols + " " + this.props.pixelColorNumbers.length)
        // console.log(this.props.pixelColorNumbers)

        return (
            <div 
            id={this.props.id}
            style={{width: '60px', height: '60px', padding: '0px', backgroundColor: this.state.color}} 
            className="col text-dark border"
            onClick={(event) => this.handleClick(event)}
            >
            </div>
        )
    }
}

export default Pixel