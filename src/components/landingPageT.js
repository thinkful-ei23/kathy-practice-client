import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './log-in.js';

export function LandingPage(props) {
	// If we are logged in redirect straight to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/boardT" />;
	}

	return (
		<div className="home">
			<h2>Practice Partner Login</h2>
			<LoginForm />
			<Link to="/registerT" aria-label="link to sign up for new teacher users">Register</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);