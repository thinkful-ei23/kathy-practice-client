import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import './nav-bar.css';

export class NavBar extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		// Only render the log out button if we are logged in
		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = (
				<button className="btn-nav" onClick={() => this.logOut()}>Log out</button>
			);
		}
		// Only render the sign up button if we are logged out
		let signUpButtonT;
		if (this.props.loggedOut) {
			signUpButtonT = (
				<button className="btn-nav" onClick={() => this.signUpT()}>Teachers Sign up</button>
			);
		}
		// Only render the sign up button if we are logged out
		let signUpButtonS;
		if (this.props.loggedOut) {
			signUpButtonS = (
				<button className="btn-nav" onClick={() => this.signUpS()}>Students Sign up</button>
			);
		}
		return (

			<header className="header" >
				<h1 className="brand">Practice Partner</h1>
				{logOutButton}
				{signUpButtonT}
				{signUpButtonS}
			</header>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);