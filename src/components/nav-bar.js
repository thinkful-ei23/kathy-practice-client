import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { NavLink } from 'react-router-dom';

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
				<NavLink to='/'
					activeClassName="btn-nav__active"
					className="btn-logout"
					aria-label="Log out"
					onClick={() => this.logOut()}>Log out</NavLink>
			);
		}
		// }
		// // Only render the sign up button if we are logged out
		// let signUpButtonT;
		// if (this.props.loggedOut) {
		// 	signUpButtonT = (
		// 		<button
		// 			className="btn-nav"
		// 			onClick={() => this.signUpT()}
		// 			aria-label="Link to new teacher sign up" >Teachers Sign up</button>
		// 	);
		// }
		// // Only render the sign up button if we are logged out
		// let signUpButtonS;
		// if (this.props.loggedOut) {
		// 	signUpButtonS = (
		// 		<button
		// 			className="btn-nav"
		// 			onClick={() => this.signUpS()}
		// 			aria-label="Link to new student sign up" >Students Sign up</button>
		// );
		// }
		return (

			<header role="banner" className="header" >
				<h1 className="brand">Practice Partner</h1>
				{logOutButton}
			</header>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);