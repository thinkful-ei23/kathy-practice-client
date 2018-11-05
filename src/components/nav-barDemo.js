import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { NavLink } from 'react-router-dom';

import './nav-bar.css';
// import RegistrationFormT from './registerT';
// import RegistrationFormS from './registerS';
// import LogInForm from './log-in';

export class NavBarDemo extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		// Only render the log out button if we are logged in
		// let logOutButton;
		// if (this.props.loggedIn) {
		// 	logOutButton = (
		// 		<button
		// 			className="btn-nav"
		// 			onClick={() => this.logOut()}
		// 			aria-label="log out" >Log out</button>
		// 	);
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
		// 	);
		// }
		return (

			<header role="banner" className="header" >
				<h1 className="brand">Practice Partner</h1>

				<div className="btn-div">

					<NavLink to='/signupT'
						activeClassName="btn-nav__active"
						className="btn-signup"
						aria-label="Teacher sign up" >Teachers Sign up</NavLink>

					<NavLink to='/signupS'
						activeClassName="btn-nav__active"
						className="btn-signup"
						aria-label="Student sign up" >Student Sign up</NavLink>
				</div>

			</header>

			// <Router basename="/react-auth-ui/">
			// 	<div className="App">
			// 		<div className="App__Aside"></div>
			// 		<div className="App__Form">
			// 			<div className="PageSwitcher">
			// 				<NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
			// 				<NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
			// 			</div>

			// 			<div className="FormTitle">
			// 				<NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
			// 			</div>

			// 			<Route exact path="/" component={SignUpForm}>
			// 			</Route>
			// 			<Route path="/sign-in" component={SignInForm}>
			// 			</Route>
			// 		</div>

			// 	</div>
			// </Router>



		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBarDemo);