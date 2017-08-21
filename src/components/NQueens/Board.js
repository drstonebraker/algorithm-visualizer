import React, { Component } from 'react'

// packages
import Measure from 'react-measure'

// components
import BoardRow from './BoardRow'
import Queen from './Queen'

export default class Board extends Component {

  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  }

  render() {
    const { width } = this.state.dimensions
    const { boardSize, currentCol, currentRow, rowPositions } = this.props

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
          boardWidth={width}
          rowPosition={rowPositions[i]}
        />
      )
      rows.push(row)
      queens.push(queen)
    }


    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds })
        }}
        >
        {({ measureRef }) =>
          <div
            ref={measureRef}
            className="board u-center-both"
            id={`n-queens_board`}
            >
            { queens }
            { rows }
          </div>
        }
      </Measure>
    );
  }
}
