import React, { Component } from 'react';


export default class BoardSpace extends Component {
  render() {
    const { boardSize, rowIndex, colIndex } = this.props

    return (
      <div
        className="board__space"
        id={`n-queens_board__space--${rowIndex}-${colIndex}`}
      >
      </div>
    );
  }
}
