import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './log-in.js';

export function LandingPage(props) {
	// If we are logged in redirect straight to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/boardS" />;
	}

	return (
		<div className="home">
			<h2>Practice Partner Login</h2>
			<LoginForm />
			<Link to="/registerS" aria-label="link to sign up for new student users">Register</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);