import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../actions/auth'
import { registerUser } from '../actions/usersS';
import Input from './input';
import { required, nonEmpty, isAllDigits, matches } from '../validators';
import './register.css';

const matchesPassword = matches('password_signUpS');

export class RegisterFormS extends React.Component {

	onSubmit(values) {
		const { name_signUpS, last_name_signUpS, email_signUpS, password_signUpS, teacher_id_signUpS } = values;
		const user = { name_signUpS, last_name_signUpS, email_signUpS, password_signUpS, teacher_id_signUpS };
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email_signUpS, password_signUpS)));
	}
	render() {
		return (
			<div>
				<form
					className="register"
					id="registerS"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}>
					<label htmlFor="name_signUpS" className="row" >Name</label>
					<Field
						id="name_signUpS"
						name="name_signUpS"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="last_name_signUpS" className="row">Last Name</label>
					<Field
						id="last_name_signUpS"
						name="last_name_signUpS"
						component={Input}
						type="text"
					/>

					<label htmlFor="email_signUpS" className="row">Email</label>
					<Field
						id="email_signUpS"
						name="email_signUpS"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="password_signUpS" className="row">Password</label>
					<Field
						id="password_signUpS"
						name="password_signUpS"
						component={Input}
						type="password"
						validate={[required, nonEmpty]}
					/>

					<label htmlFor="confirmPassword-signUpS" className="row">Confirm Password</label>
					<Field
						id="confirmPassword-signUpS"
						name="confirmPassword-signUpS"
						component={Input}
						type="password"
						validate={[required, nonEmpty, matchesPassword]}
					/>

					<label htmlFor="teacher_id_signUpS" className="row">Teacher Code</label>
					<Field
						id="teacher_id_signUpS"
						name="teacher_id_signUpS"
						component={Input}
						type="text"
						validate={[required, nonEmpty, isAllDigits]}

					/>

					<button
						className="row btn-large"
						aria-label="Button to sign in"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}>
						Sign Up!
				</button>
				</form >
			</div >

		);
	}
}
const onSubmitFail = (errors, dispatch, submitError) => {
	if (submitError instanceof SubmissionError) {

	} else {
		throw submitError
	}
}
RegisterFormS = connect()(RegisterFormS)

export default reduxForm({
	form: 'registerS',
	onSubmitFail: (error, dispatch) => dispatch(focus('registerS', Object.keys(error)[0]))
})(RegisterFormS)
