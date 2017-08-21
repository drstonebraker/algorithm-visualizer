import React, { Component } from 'react';

// components
import BoardRow from './BoardRow'
import Queen from './Queen'

export default class Board extends Component {

  render() {
    const { boardSize } = this.props

    let rows = []
    for (let i = 0; i < boardSize; i++) {
      let row = (
        <BoardRow
          key={`row-${i}`}
          boardSize={boardSize}
          rowIndex={i}
        />
      )
      rows.push(row)

    }

    return (
      <div className="board u-center-both">
        <Queen
          id={`queen--0`}
          boardSize={boardSize}
        />
        { rows }
      </div>
    );
  }
}
