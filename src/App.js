import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CheeseList from './components/cheese-list.js';
//import AddList from './components/add-list.js';
//import List from './components/list.js';
//import Card from './components/card.js';
import LogIn from './components/log-in.js';
import RegisterForm from './components/register.js';
import BoardS from './components/boardS.js';
import TitleList from './components/title-listT.js';
class App extends Component {
  render() {
    return (
      <div className="working">
        <BoardS />
        <TitleList />

      </div>
    )
  }
};

export default App;


/*
 <AddList />
        <List />
        <Card />
        <LogIn />
        <RegisterForm />
        */