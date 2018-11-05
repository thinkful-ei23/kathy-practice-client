import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationFormT from './registerT';
import NavBar from './nav-bar';

export function RegistrationPage(props) {
	console.log("signupT front")
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/boardT" />;
	}
	return (
		<div className="home">
			<NavBar />
			<RegistrationFormT />
		</div>
	);
}
const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);