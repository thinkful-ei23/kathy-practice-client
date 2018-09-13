import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import Input from './input';
import { required, nonEmpty } from '../validators';
import './log-in.css';

export function LogInForm(props) {
	const { handleSubmit, pristine, submitting } = props;
	// export class LogInForm extends React.Components {
	// constructor(props) {
	// 	super(props);

	// onSubmit(values); {
	// //console.log(values, 'Values')
	// return fetch('http://localhost:8080/api/login', {
	// 	method: 'POST',
	// 	body: JSON.stringify(values),
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	}
	// })
	// 	.then(res => {

	// 		if (!res.ok) {
	// 			if (
	// 				res.headers.has('content-type') &&
	// 				res.headers
	// 					.get('content-type')
	// 					.startsWith('application/json')
	// 			) {
	// 				// It's a nice JSON error returned by us, so decode it
	// 				return res.json().then(err => Promise.reject(err));
	// 			}
	// 			// It's a less informative error returned by express
	// 			return Promise.reject({
	// 				code: res.status,
	// 				message: res.statusText
	// 			});
	// 		}
	// 		return res.json();
	// 	})
	// 	.then((data) => console.log('Submitted with dataT', data))
	// 	.catch(err => {
	// 		//console.log(err, 'error regT componenets line 43ish')
	// 		const { reason, message, location } = err;
	// 		if (reason === 'ValidationError') {
	// 			// Convert ValidationErrors into SubmissionErrors for Redux Form
	// 			return Promise.reject(
	// 				new SubmissionError({
	// 					[location]: message
	// 				})
	// 			);
	// 		}
	// 		return Promise.reject(
	// 			new SubmissionError({
	// 				_error: 'Error submitting message'
	// 			})
	// 		);
	// 	});

	// // }
	// render() {
	// 	const { handleSubmit, pristine, submitting } = this.props;
	// 	let successMessage;
	// 	if (this.props.submitSucceeded) {
	// 		successMessage = (
	// 			<div className="message message-success">
	// 				Message submitted successfully
	// 							</div>
	// 		);
	// 	}
	// 	let errorMessage;
	// 	if (this.props.error) {
	// 		errorMessage = (
	// 			<div className="message message-error">{this.props.error}</div>
	// 		);
	// 	}




	return (
		<form className="logInForm" onSubmit={handleSubmit((values) => {
			return this.onSubmit(values, this.props);
		})}>

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
				disabled={pristine || submitting}>
				Login
				</button>

			<button
				className="login-btn2 btn-large"
				type="submit"
				disabled={pristine || submitting}>
				First Time? Sign Up Here
			</button>
		</form>
	);
}
// }
export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors')
		return dispatch(focus('login', Object.keys(errors)[0]))
	}
})(connect()(LogInForm));
