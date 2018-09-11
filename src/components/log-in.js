import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import Input from './input';
import { required, nonEmpty } from '../validators';
import './log-in.css';

export function LogInForm(props) {

	const { handleSubmit, pristine, submitting } = props;

	return (
		<form className="logInForm" onSubmit={handleSubmit(values => console.log(values)
		)}>
			<div className="rowL">
				<label htmlFor="user">Username or Email</label>
				<div>
					<Field
						name="user"
						component={Input}
						type="text"
						placeholder="Username or Email"
						validate={[required, nonEmpty]}
					/>
				</div>
			</div>

			<div className="rowL">
				<label htmlFor="password">Password</label>
				<div>
					<Field
						name="password"
						component={Input}
						type="password"
						placeholder="Password"
						validate={[required, nonEmpty]}
					/>
				</div>
			</div>

			{/* <div className="rowL"> */}
			<button
				className="btn btn-large"
				type="submit"
				disabled={pristine || submitting}>
				Login
				</button>
			{/*</div> */}

			<button className="btn btn-large" >Sign Up</button>
		</form>
	);
}




export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors')
		return dispatch(focus('login', Object.keys(errors)[0]))
	}
})(connect()(LogInForm));
