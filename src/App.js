import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent'
import CardsComponent from './components/cards/CardsComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardsComponent />
      </div>
    );
  }
}

export default App;
