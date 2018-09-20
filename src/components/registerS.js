import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions/usersS';
import Input from './input';
import { required, nonEmpty, isAllDigits, matches } from '../validators';
import './register.css';
const matchesPassword = matches('password');

export class RegisterFormS extends React.Component {

	onSubmit(values) { //console.log(values, 'Values')
		const { first_name, last_name, email, password } = values;
		const user = { first_name, last_name, email, password };
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)));
	}
	render() {
		return (
			<div>
				<form
					id="signUpStudent"
					className="register" onSubmit={this.props.handleSubmit((values) => {
						return this.onSubmit(values, this.props);
					})}>

					<label htmlFor="first_name-signUpS" className="row" >Name</label>
					<Field
						id="nameS"
						name="first_name-signUpS"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
						className="formField"
					/>

					<label htmlFor="last_name-signUpS" className="row">Last Name</label>
					<Field
						id="last_nameS"
						name="last_name-signUpS"
						component={Input}
						type="text"
						className="formField"
					/>

					<label htmlFor="email-signUpS" className="row">Email</label>
					<Field
						id="emailS"
						name="email-signUpS"
						component={Input}
						type="text"
						validate={[required, nonEmpty]}
						className="formField"

					/>

					<label htmlFor="password-signUpS" className="row">Password</label>
					<Field
						id="password"
						name="password-signUpS"
						component={Input}
						type="password"
						validate={[required, nonEmpty]}
						className="formField"

					/>

					<label htmlFor="confirmPassword-signUpS" className="row">Confirm Password</label>
					<Field
						id="confirmpasswordS"
						name="confirmPassword-signUpS"
						component={Input}
						type="password"
						validate={[required, nonEmpty, matchesPassword]}
						className="formField"

					/>

					<label htmlFor="teacherCode-signUpS" className="row">Teacher Code</label>
					<Field
						id="teacher_codeS"
						name="teacherCode-signUpS"
						component={Input}
						type="number"
						validate={[required, nonEmpty, isAllDigits]}


					/>

					<button
						aria-label="Button to log in"
						className="row btn-large"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}>
						Sign Up!
				</button>
				</form >
			</div>

		);
	}
}

export default reduxForm({
	form: 'registerS',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors in regS.component')
		return dispatch(focus('registerS', Object.keys(errors)[0]))
	}
})(connect()(RegisterFormS));

