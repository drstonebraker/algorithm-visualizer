import React, { Component } from 'react';
import ReactSVG from 'react-svg'


export default class Queen extends Component {

  render() {
    const { col, currentCol, currentRow } = this.props
    // const spaceWidth = document.getElementById('n-queens_board').offsetWidth / 8
    let styles = {
      'transform': 'translate(100px, 100px)'
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
