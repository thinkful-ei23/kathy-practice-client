import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions/usersT';
import Input from './input';
import { required, nonEmpty, matches } from '../validators';
import './register.css';
const matchesPassword = matches('password_signUpT');
// TODO console.log(registerUser, "I am a user")
export class RegisterFormT extends React.Component {

	onSubmit(values) {
		// console.log(values, 'values in registerT')
		const { first_name_signUpT, last_name_signUpT, email_signUpT, password_signUpT } = values;
		const user = { first_name_signUpT, last_name_signUpT, email_signUpT, password_signUpT };

		return this.props
			.dispatch(registerUser(user))
		// .then(() => this.props.dispatch(registerUser(first_name_signUpT, last_name_signUpT, email_signUpT, password_signUpT)));
	}
	render() {
		return (
			<div className="register">
				<form
					id="registerT"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}
				// onSubmit={() => console.log('submitting')}
				>
					<label htmlFor="first_name_signUpT" className="row" >First Name:</label>
					<Field
						id="first_name_signUpT"
						name="first_name_signUpT"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}

					/>

					<label htmlFor="last_name_signUpT" className="row">Last Name:</label>
					<Field
						id="last_name_signUpT"
						name="last_name_signUpT"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="email_signUpT" className="row">Email:</label>
					<Field
						id="email_signUpT"
						name="email_signUpT"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="password_signUpT" className="row">Password:</label>
					<Field
						id="password_signUpT"
						name="password_signUpT"
						component={Input}
						type="password"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="confirmPassword_signUpT" className="row">Confirm Password:</label>
					<Field
						id="confirmPassword_signUpT"
						name="confirmPassword_signUpT"
						component={Input}
						type="password"
						validate={[required, nonEmpty, matchesPassword]}
					/>

					<button
						className="row btn-large"
						aria-label="Button to sign up"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}
					>
						Sign Up
				</button>
				</form >
			</div>

		);
	}
}
const onSubmitFail = (errors, dispatch, submitError) => {
	if (submitError instanceof SubmissionError) {
		// console.log(submitError, 'Here in hello world') // TODO
		console.log('+++++++++++++++Here in hello world registerT in React') // TODO

		// optionally do something
	} else {
		throw submitError // or handle it
	}
}

RegisterFormT = connect()(RegisterFormT)
export default reduxForm({
	form: 'registerT',
	// onSubmitFail,
	onSubmitFail: (error, dispatch) => {
		console.log('+++++++++++++++++++++ in Register T', error)

		console.log(error, 'errors in the bottom of regT/components')

		return dispatch(focus('registerT', Object.keys(error)[0]))
	}
})(RegisterFormT)

/*

const mapStateToProps = state => ({
	form: state.form
});
*/