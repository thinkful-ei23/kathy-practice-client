import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty } from '../validators';
import './log-in.css';
import NavBarDemo from './nav-barDemo';

export class LogInForm extends React.Component {
	onSubmit(values) {
		// console.log(values, 'values in login.js') // TODO
		return this.props.dispatch(login(values.email, values.password)); //check to see how to change state
	}
	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}
		return (

			<section>
				<NavBarDemo />
				<form
					id="logInForm"
					aria-labelledby="logInForm"
					className="logInForm"
					onSubmit={this.props.handleSubmit(values =>
						//return ( before this.onSubmit(values))
						this.onSubmit(values)
					)}>
					{error}
					<label className="rowL"
						htmlFor="email-logIn">Email</label>
					<Field
						id="email-logIn"
						name="email-logIn"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label className="rowL" htmlFor="password-logIn">Password</label>
					<Field
						id="password-logIn"
						name="password-logIn"
						component={Input}
						type="password"
						validate={[required, nonEmpty]}
					/>

					<button
						className="login-btn btn-large"
						aria-label="submit info for log in"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}>
						Log in
				</button>
				</form>

			</section>
		);
	}
}
console.log("I'm in log-in.js at the bottom 1", login)

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('email', 'password'))
		//return dispatch(focus('login', Object.keys(errors)[0]))
		console.log("--------I'm in log-in.js at the bottom 2", login)

	}

})(connect()(LogInForm));
