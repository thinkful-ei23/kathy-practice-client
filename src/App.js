import React from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { refreshAuthToken } from './actions/auth';
import './App.css';

//================== compnenets needed below ============
import BoardS from './components/boardS';
import BoardT from './components/boardT';
import LogInForm from './components/log-in.js';
import OnBoardingT from './components/onBoardingT.js';
import OnBoardingS from './components/onBoardingS.js';
import RegisterFormS from './components/signupS.js';
import RegisterFormT from './components/signupT.js';

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
            <Route exact path="/" component={LogInForm} />
            <Route exact path="/demoS" component={OnBoardingS} />
            <Route exact path="/demoT" component={OnBoardingT} />
            <Route exact path="/boardS" component={BoardS} />
            <Route exact path="/boardT" component={BoardT} />
            <Route exact path="/signupS" component={RegisterFormS} />
            <Route exact path="/signupT" component={RegisterFormT} />
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
// export default withRouter(connect(mapStateToProps)(App));
export default connect(mapStateToProps)(App);

        //TODO Router

