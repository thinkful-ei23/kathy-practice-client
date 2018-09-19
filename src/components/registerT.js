import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions/usersT';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches } from '../validators';
import './register.css';
const matchesPassword = matches('password');
// TODO console.log(registerUser, "I am a user")
export class RegisterFormT extends React.Component {

	onSubmit(values) {
		console.log(values, 'values in registerT')
		const { first_name, last_name, email, password } = values;
		const user = { first_name, last_name, email, password };

		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)));
	}
	render() {
		return (
			<div className="register">
				<form
					id="signUpTeacher"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}>

					<label htmlFor="first_name-signUpT" className="row" >First Name:</label>
					<Field
						id="first_nameT"
						name="first_name-signUpT"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}

					/>

					<label htmlFor="last_name-signUpT" className="row">Last Name:</label>
					<Field
						id="last_nameT"
						name="last_name-signUpT"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="email-signUpT" className="row">Email:</label>
					<Field
						id="emailT"
						name="email-signUpT"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="password-signUpT" className="row">Password:</label>
					<Field
						id="passwordT"
						name="password-signUpT"
						component={Input}
						type="password"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="confirmPassword-signUpT" className="row">Confirm Password:</label>
					<Field
						id="confirmpasswordT"
						name="confirmPassword-signUpT"
						component={Input}
						type="password"
						validate={[required, nonEmpty, matchesPassword]}
					/>
				</form >
				<button
					className="row btn-large"
					aria-label="Button to log in"
					type="submit"
					disabled={this.props.pristine || this.props.submitting}
					onSubmit={() => this.registerT()}>
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