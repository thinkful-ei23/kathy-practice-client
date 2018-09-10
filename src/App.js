import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CheeseList from './components/cheese-list.js';
import AddList from './components/add-list.js';
import List from './components/list.js';
import Card from './components/card.js';

class App extends Component {
  render() {
    return (
      <div className="working">
        <AddList />
        <List />
        <Card />
      </div>
    )
  }
};

export default App;
