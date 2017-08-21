import React, { Component } from 'react';

// containers
import NQueens from './containers/NQueens'

// styles
import './styles/reset.css';
import './styles/main.css'


class App extends Component {
  render() {
    return (
      <NQueens />
    );
  }
}

export default App;
