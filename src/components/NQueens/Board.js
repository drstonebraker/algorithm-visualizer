import React, { Component } from 'react';

// components
import BoardRow from './BoardRow'
import Queen from './Queen'

export default class Board extends Component {

  render() {
    const { boardSize, currentCol, currentRow } = this.props

    let rows = []
    let queens = []

    for (let i = 0; i < boardSize; i++) {
      let row = (
        <BoardRow
          key={`row-${i}`}
          boardSize={boardSize}
          rowIndex={i}
        />
      )
      let queen = (
        <Queen
          key={`n-queens_queen--${i}`}
          currentCol={currentCol}
          currentRow={currentRow}
          col={i}
        />
      )
      rows.push(row)
      queens.push(queen)
    }


    return (
      <div
        className="board u-center-both"
        id={`n-queens_board`}
      >
        { queens }
        { rows }
      </div>
    );
  }
}
