import React, { Component } from 'react';

// components
import Board from '../components/NQueens/Board'

// styles
import '../styles/NQueens/n-queens.css';



export default class NQueens extends Component {

  state = {
    boardSize: 8,
    currentCol: 0,
    currentRow: 0
  };

  render() {
    const {boardSize, currentRow, currentCol} = this.state

    return (
      <Board
        className="board u-center-both"
        id="n-queens--board"
        boardSize={boardSize}
        currentCol={currentCol}
        currentRow={currentRow}
      />
    );
  }
}
