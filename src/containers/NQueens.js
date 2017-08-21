import React, { Component } from 'react';

// components
import Board from '../components/NQueens/Board'

// styles
import '../styles/NQueens/n-queens.css';



export default class NQueens extends Component {

  state = {
    boardSize: 8,
    currentCol: 7,
    currentRow: 0,
    rowPositions: []
  };

  componentWillMount = () => {
    this.getRowPositions()
  }

  getRowPositions = () => {
    let rowPositions = []

    for (let i=0; i<this.state.boardSize; i++) {
      rowPositions.push(0)
    }
    rowPositions = [0,2,7,2,5,2,3,1]
    this.setState({rowPositions})
  }

  render() {
    const {boardSize, currentRow, currentCol, rowPositions} = this.state
    return (
      <Board
        className="board u-center-both"
        id="n-queens--board"
        boardSize={boardSize}
        currentCol={currentCol}
        currentRow={currentRow}
        rowPositions={rowPositions}
      />
    );
  }
}
