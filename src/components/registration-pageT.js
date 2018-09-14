import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationFormT from './registerT';
import { LogInForm } from './log-in';
import BoardT from './boardT';

export function RegistrationPage(props) {
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/boardT" />;
	}
	return (
		<div className="home">
			<h2>Register for Practice Partner</h2>
			<RegistrationFormT />
			<Link to="/log-in">Login</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);