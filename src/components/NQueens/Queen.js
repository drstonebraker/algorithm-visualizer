import React, { Component } from 'react';
import ReactSVG from 'react-svg'


export default class Queen extends Component {

  render() {
    const { queenId } = this.props
    
    return (
      <div
        className="queen"
        id={`n-queens_queen--${queenId}`}
      >
        <div
          className="queen__img u-center-both">
        </div>
      </div>
    );
  }
}
