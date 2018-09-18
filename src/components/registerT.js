import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions/usersT';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches } from '../validators';
import './register.css';
const matchesPassword = matches('password');
console.log(registerUser, "I am a user")

export class RegisterFormT extends React.Component {

	onSubmit(values) {
		console.log(values, 'values in registerT')
		const { first_name, last_name, email, password } = values;
		const user = { first_name, last_name, email, password };

		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)));
	}

	//=====================================
	render() {
		return (
			<div className="register">
				<form onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>

					<label className="row" >First Name</label>
					<Field
						name="first_name"
						component={Input}
						type="text"
						placeholder="First Name"
						validate={[required, nonEmpty]}
					/>

					<label className="row">Last Name</label>
					<Field
						name="last_name"
						component={Input}
						type="text"
						placeholder="Last Name"
						validate={[required, nonEmpty]}
					/>

					<label className="row">Email</label>
					<Field
						name="email"
						component={Input}
						type="text"
						placeholder="Email"
						validate={[required, nonEmpty]}
					/>

					<label className="row">Password</label>
					<Field
						name="password"
						component={Input}
						type="password"
						placeholder="Password"
						validate={[required, nonEmpty]}
					/>

					<label className="row">Confirm Password</label>
					<Field
						name="confirmpassword"
						component={Input}
						type="password"
						placeholder="Confirm Password"
						validate={[required, nonEmpty, matchesPassword]}
					/>
				</form >
				<button
					className="row btn-large"
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
					Sign Up
				</button>
			</div>

		);
	}
}
const onSubmitFail = (errors, dispatch, submitError) => {
	if (submitError instanceof SubmissionError) {
		console.log(submitError, 'Here in hello world')
		// optionally do something
	} else {
		throw submitError // or handle it
	}
}

RegisterFormT = connect()(RegisterFormT)
export default reduxForm({
	form: 'registerT',
	// onSubmitFail
	onSubmitFail: (error, dispatch) => {
		console.log(error, 'errors in the bottom of regT/components')

		return dispatch(focus('registerT', Object.keys(error)[0]))
	}
})(RegisterFormT)

/*

const mapStateToProps = state => ({
	form: state.form
});
*/