import React from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
// import AddCard from './components/add-card.js';
// import AddList from './components/add-list.js';
// import CardS from './components/cardS';
// import CardT from './components/cardT';
// import ClassList from './components/class-list.js';
// import Edit from './components/edit.js';
// import List from './components/list.js';
// import TitleList from './components/title-listT.js';
// import ClassManager from './components/classManager.js';
// import Scratch from './components/scratch';
//================== compnenets needed below ============
// import BoardS from './components/boardS.js';
// import BoardT from './components/boardT';
// import LandingPageS from './components/landingPageS.js';
// import LandingPageT from './components/landingPageT.js';
import LogIn from './components/log-in.js';
// import NavBar from './components/nav-bar';
// import NavBarDemo from './components/nav-barDemo';
// import OnBoardingT from './components/onBoardingT.js';
// import OnBoardT from './components/onBoardT.js';
// import OnBoardingS from './components/onBoardingS.js';
// import RegisterFormS from './components/registerS.js';
// import RegisterFormT from './components/registerT.js';
import { refreshAuthToken } from './actions/auth';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }
  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }
  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }
  render() {
    return (
      <Router>
        <div className="app">
          {/* <NavBar /> */}
          <main role="main">
            {/* <LogIn /> */}
            {/* <RegisterFormT /> */}
            {/* <RegisterFormS /> */}
            {/* <OnBoardingT /> */}
            {/* <OnBoardingS /> */}
            {/* <BoardS /> */}

            <br />
            <br />
            {/* <NavBarDemo /> */}
            <br />
            <br />
            {/* <List /> */}
            <br />
            <br />
            {/* <RegisterFormT /> */}

            <br />
            <br />

            {/* <RegisterFormS /> */}
            <br />
            <br />
            <LogIn />
            {/* <BoardS /> */}

            <br />
            <br />
            {/* <p>ClassManager</p> */}
            {/* <ClassManager /> */}
            <br />
            <br />

            <br />
            <br />
            {/* <AddList /> */}
            <br />
            <br />
            {/* <OnBoardingS /> */}
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/login" component={LogIn} /> */}
            {/* <Route exact path="/registerS" component={RegisterFormS} /> */}
            {/* <Route exact path="/registerT" component={RegisterFormT} /> */}
            {/* <Route exact path="/landingPageT" component={landingPageT} /> */}
            {/* <Route exact path="/landingPageS" component={landingPageS} /> */}
            {/* <Route exact path="/boardS" component={BoardS} /> */}
            {/* <Route exact path="/boardT" component={BoardT} /> */} */}
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({

  authToken: state.auth.authToken !== null, //TODO fix this
  loggedIn: state.auth.currentUser !== null
})

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default /*withRouter*/(connect(mapStateToProps)(App));
//TODO Router


  /*  TODO suggestions from group
  select for saved logs and student list with one assign button
  teacher code = last name
{/*
        <AddCard />
        <AddList />
        <CardS />
        <CardT />
        <ClassList />
        <Edit />
        <List />
        <TitleList />
        <LandingPageS />
        <LandingPageT />


        <NavBar />

        <RegisterFormT />
        <RegisterFormS />
        <BoardS />
        <BoardT />


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
* /


        /* <Route exact path="/X" component={LandingPage} />
        <Route exact path="/Xboard" component={Dashboard} />
        <Route exact path="/Xregister" component={RegistrationPage} /> */
