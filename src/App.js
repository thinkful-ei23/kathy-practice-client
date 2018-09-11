import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CheeseList from './components/cheese-list.js';
import AddList from './components/add-list.js';
import List from './components/list.js';
import Card from './components/card.js';
import LogIn from './components/log-in.js';
import RegisterForm from './components/register.js';
import BoardS from './components/boardS.js';
import TitleList from './components/title-listT.js';
import Edit from './components/edit.js';
import BoardT from './components/boardT.js';
import ClassList from './components/class-list.js';

class App extends Component {
  render() {
    return (
      <div className="working">


        <List />

      </div>
    )
  }
};

export default App;


/*

<RegisterForm />
<LogIn />
<BoardS />
<BoardT />
<Card />
<List />
<AddList />
<TitleList />
<ClassList />
<Edit />
        */