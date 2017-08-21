import React, { Component } from 'react';
import ReactSVG from 'react-svg'


export default class Queen extends Component {

  render() {
    const { col, currentCol, currentRow } = this.props

    return (
      <div
        className={`queen ${col <= currentCol && 'u-hidden'}`}
        id={`n-queens_queen--${col}`}
      >
        <div
          className="queen__img u-center-both">
        </div>
      </div>
    );
  }
}
