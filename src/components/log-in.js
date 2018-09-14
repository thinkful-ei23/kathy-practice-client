import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty } from '../validators';
import './log-in.css';

export class LogInForm extends React.Component {
	onSubmit(values) {
		return this.props.distpatch(login(values.email, values.password));
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
			<form
				className="logInForm"
				onSubmit={this.props.handleSubmit(values =>
					//return ( before this.onSubmit(values))
					this.onSubmit(values)
				)}>
				{error}
				<label className="rowL"
					htmlFor="email">Email</label>
				<Field
					name="email"
					component={Input}
					type="text"
					placeholder="Email"
					validate={[required, nonEmpty]}
				/>

				<label className="rowL" htmlFor="password">Password</label>
				<Field
					name="password"
					component={Input}
					type="password"
					placeholder="Password"
					validate={[required, nonEmpty]}
				/>

				<button
					className="login-btn btn-large"
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
					Login
				</button>

				<button
					className="login-btn2 btn-large"
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
					First Time? Sign Up Here
			</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => {
		dispatch(focus('email', 'password'))
		//return dispatch(focus('login', Object.keys(errors)[0]))
	}
})(connect()(LogInForm));
