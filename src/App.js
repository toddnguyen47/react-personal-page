import React, { Component } from 'react';
// import uuid from 'uuid';
import './App.css';
import Header from './components/layout/Header';

/** Ref: https://www.youtube.com/watch?v=sBws8MSXN7A*/
class App extends Component {
  render() {
    return (
      // Note that we can also use empty brackets <>
      // Ref: https://reactjs.org/docs/fragments.html#short-syntax
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
