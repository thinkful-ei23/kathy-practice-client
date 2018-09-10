import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import './log-in.css';


export function LogInForm(props) {

	const { handleSubmit, pristine, reset, submitting } = props;
	return (
		<form className="logInForm" onSubmit={handleSubmit}>
			<div className="row">
				<label>Username or Email</label>
				<div>
					<Field
						name="user"
						component="input"
						type="text"
						placeholder="Username or Email"
					//validate={[required, nonEmpty, isTrimmed]}
					/>
				</div>
			</div>

			<div className="row">
				<label>Password</label>
				<div>
					<Field
						name="password"
						component="input"
						type="text"
						placeholder="Password"
					//validate={[required, nonEmpty, isTrimmed]}
					/>
				</div>
			</div>

			<div className="row">
				<button
					type="submit"
					disabled={pristine || submitting}>
					Login
				</button>
			</div>
		</form>

	);

}

LogInForm = connect()(LogInForm);

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors')
		return dispatch(focus('login', Object.keys(errors)[0]))
	}
})(LogInForm);
