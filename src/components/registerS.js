import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions/usersS';
import { login } from '../actions/auth';
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
					aria-labelledby="signUpStudent"
					className="register" onSubmit={this.props.handleSubmit((values) => {
						return this.onSubmit(values, this.props);
					})}>

					<label htmlFor="first_name" className="row" >Name</label>
					<Field
						name="name"
						component={Input}
						type="text"
						placeholder="Name"
						validate={[required, nonEmpty]}
						className="formField"
						aria-labelledby="first_name"
					/>

					<label htmlFor="last_name" className="row">Last Name</label>
					<Field
						name="last_name"
						component={Input}
						type="text"
						placeholder="Last Name (optional)"
						className="formField"
						aria-labelledby="last_name"
					/>

					<label htmlFor="email" className="row">Email</label>
					<Field
						name="email"
						component={Input}
						type="text"
						placeholder="Email"
						validate={[required, nonEmpty]}
						className="formField"
						aria-labelledby="email"
					/>

					<label htmlFor="password" className="row">Password</label>
					<Field
						name="password"
						component={Input}
						type="password"
						placeholder="Password"
						validate={[required, nonEmpty]}
						className="formField"
						aria-labelledby="password"
					/>

					<label htmlFor="confirmPassword" className="row">Confirm Password</label>
					<Field
						name="confirmpassword"
						component={Input}
						type="password"
						placeholder="Confirm Password"
						validate={[required, nonEmpty, matchesPassword]}
						className="formField"
						aria-labelledby="confirmPassword"
					/>

					<label htmlFor="teacherCode" className="row">Teacher Code</label>
					<Field
						name="teacher_code"
						component={Input}
						type="number"
						placeholder="Teacher Code"
						validate={[required, nonEmpty, isAllDigits]}
						aria-labelledby="teacherCode"

					/>

					<button
						className="row btn-large"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}>
						Sign Up!
						aria-label="Button to log in"

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

