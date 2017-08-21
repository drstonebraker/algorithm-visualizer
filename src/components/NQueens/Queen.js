import React, { Component } from 'react';
import ReactSVG from 'react-svg'


export default class Queen extends Component {

  render() {
    const { col, currentCol, currentRow, boardWidth } = this.props
    const spaceWidth = boardWidth / 8
    const translateXVal = spaceWidth * col
    let styles = {
      'transform': `translate(${translateXVal}px, 0px)`
    }

    return (
      <div
        className={`queen ${col <= currentCol ? '' : 'u-hidden'}`}
        id={`n-queens_queen--${col}`}
        style={styles}
      >
        <div
          className="queen__img u-center-both">
        </div>
      </div>
    );
  }
}
