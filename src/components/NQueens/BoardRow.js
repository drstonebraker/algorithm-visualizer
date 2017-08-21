import React, { Component } from 'react';

// components
import BoardSpace from './BoardSpace'

export default class BoardRow extends Component {
  render() {
    const { boardSize, rowIndex } = this.props

    let spaces = []
    for (let i=0; i < boardSize; i++) {
      let space = (
        <BoardSpace
          key={`space-${i}`}
          boardSize={boardSize}
          rowIndex={rowIndex}
          colIndex={i}
        />
      )
      spaces.push(space)
    }

    return (
      <div
        className="board__row cf"
        id={`n-queens_board__row--${rowIndex}`}
      >
        { spaces }
      </div>
    );
  }
}
