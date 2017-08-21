import React, { Component } from 'react';

// components
import Board from '../components/NQueens/Board'

// styles
import '../styles/NQueens/n-queens.css';



export default class NQueens extends Component {

  state = {
    boardSize: 8
  };

  render() {
    const {boardSize} = this.state

    return (
      <Board
        boardSize={boardSize}
      />
    );
  }
}
