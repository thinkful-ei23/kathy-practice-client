import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CheeseList from './components/cheese-list.js';
// import AddList from './components/add-list.js';
//import List from './components/list.js';
// import CardT from './components/cardT';
// import CardS from './components/cardS';
import LogIn from './components/log-in.js';
import RegisterFormS from './components/registerS.js';
import RegisterFormT from './components/registerT.js';
// import BoardS from './components/boardS.js';
// import TitleList from './components/title-listT.js';
// import Edit from './components/edit.js';
//import BoardT from './components/boardT.js';
// import ClassList from './components/class-list.js';

class App extends Component {
  render() {
    return (
      <div className="working">
        <RegisterFormT />
        <LogIn />

        <RegisterFormS />

      </div>
    )
  }
};

export default App;


/*

<RegisterFormT />
<RegisterFormS />
<LogIn />
<BoardS />
<BoardT />
<CardS />
<CardT />
<List />
<AddList />
<TitleList />
<ClassList />
<Edit />
        */