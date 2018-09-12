import React from 'react';
import { reduxForm, Field, focus, SubmissionError, } from 'redux-form';
import { connect } from 'react-redux';

import Input from './input';
import { required, nonEmpty } from '../validators';
import './register.css';


export class RegisterFormT extends React.Component {

	onSubmit(values) {
		//console.log(values, 'Values')
		return fetch('http://localhost:8080/api/teachers', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				//console.log(res, 'results here in regT compoenents line 22ish')
				if (!res.ok) {
					if (
						res.headers.has('content-type') &&
						res.headers
							.get('content-type')
							.startsWith('application/json')
					) {
						// It's a nice JSON error returned by us, so decode it
						return res.json().then(err => Promise.reject(err));
					}
					// It's a less informative error returned by express
					return Promise.reject({
						code: res.status,
						message: res.statusText
					});
				}
				return res.json();
			})
			.then((data) => console.log('Submitted with dataT', data))
			.catch(err => {
				//console.log(err, 'error regT componenets line 43ish')
				const { reason, message, location } = err;
				if (reason === 'ValidationError') {
					// Convert ValidationErrors into SubmissionErrors for Redux Form
					return Promise.reject(
						new SubmissionError({
							[location]: message
						})
					);
				}
				return Promise.reject(
					new SubmissionError({
						_error: 'Error submitting message'
					})
				);
			});
	}
	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		let successMessage;
		if (this.props.submitSucceeded) {
			successMessage = (
				<div className="message message-success">
					Message submitted successfully
						</div>
			);
		}
		let errorMessage;
		if (this.props.error) {
			errorMessage = (
				<div className="message message-error">{this.props.error}</div>
			);
		}

		return (
			<div>
				<form className="register" onSubmit={handleSubmit((values) => { return this.onSubmit(values, this.props); })}>

					<label className="row" >First Name</label>
					<Field
						name="first_name"
						component={Input}
						type="text"
						placeholder="First Name"
						validate={[required, nonEmpty]}
					/>

					<label className="row">Last Name</label>
					<Field
						name="last_name"
						component={Input}
						type="text"
						placeholder="Last Name"
						validate={[required, nonEmpty]}
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
						validate={[required, nonEmpty]}
					/>

					<button
						className="row btn btn-large"
						type="submit"
						disabled={pristine || submitting}>
						Sign Up
				</button>
				</form >
			</div>

		);
	}
}
export default reduxForm({
	form: 'registerT',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors in the bottom of regT/components')
		return dispatch(focus('registerT', Object.keys(errors)[0]))
	}
})(connect()(RegisterFormT));

/*

const mapStateToProps = state => ({
	form: state.form
});
*/