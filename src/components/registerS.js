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
				<form className="register" onSubmit={this.props.handleSubmit((values) => {
					return this.onSubmit(values, this.props);
				})}>

					<label className="row" >Name</label>
					<Field
						name="name"
						component={Input}
						type="text"
						placeholder="Name"
						validate={[required, nonEmpty]}
					/>

					<label className="row">Last Name</label>
					<Field
						name="last_name"
						component={Input}
						type="text"
						placeholder="Last Name (optional)"
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

					<label className="row">Teacher Code</label>
					<Field
						name="teacher_code"
						component={Input}
						type="number"
						placeholder="Teacher Code"
						validate={[required, nonEmpty, isAllDigits]}
					/>

					<button
						className="row btn btn-large"
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

