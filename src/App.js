import React from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//================== compnenets needed below ============
import BoardS from './components/boardS.js';
import BoardT from './components/boardT';
// import LandingPageS from './components/landingPageS.js';
// import LandingPageT from './components/landingPageT.js';
import LogInForm from './components/log-in.js';
// import NavBar from './components/nav-bar';
// import NavBarDemo from './components/nav-barDemo';
import OnBoardingT from './components/onBoardingT.js';
import OnBoardT from './components/onBoardT.js';
import OnBoardingS from './components/onBoardingS.js';
import RegisterFormS from './components/signupS.js';
import RegisterFormT from './components/signupT.js';
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

          <main role="main">
            {/* <LogInForm /><br></br> */}
            {/* <NavBar /><br></br><br></br> */}

            {/* <NavBar /><br></br><br></br> */}
            <BoardS /><br></br>
            <BoardT /><br></br>
            {/* <RegisterFormT /><br></br> */}
            {/* <RegisterFormS /><br></br> */}
            <OnBoardingS /><br></br>
            <OnBoardingT /><br></br>

            <Route exact path="/login" component={LogInForm} />

            <Route exact path="/onBoardingS" component={OnBoardingS} />
            <Route exact path="/onBoardingT" component={OnBoardingT} />


            <Route exact path="/boardS" component={BoardS} />
            <Route exact path="/boardT" component={BoardT} />

            <Route exact path="/signupS" component={RegisterFormT} />
            <Route exact path="/signupT" component={RegisterFormS} />



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
<NavBarDemo />

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
  /*
  <Route exact path="/" component={LogIn} />

       <Route exact path="/X" component={LandingPage} />
        <Route exact path="/Xboard" component={Dashboard} />
        <Route exact path="/Xregister" component={RegistrationPage} /> */
