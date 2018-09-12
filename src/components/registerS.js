import React from 'react';
import { reduxForm, Field, focus, SubmissionError, } from 'redux-form';
import { connect } from 'react-redux';

import Input from './input';
import { required, nonEmpty, isAllDigits } from '../validators';
import './register.css';


export class RegisterFormS extends React.Component {

	onSubmit(values) {
		return fetch('/api/students', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
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
				return;
			})
			.then(() => console.log('Submitted with values', values))
			.catch(err => {
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
		// let successMessage;
		// if (this.props.submitSucceeded) {
		// 	successMessage = (
		// 		<div className="message message-success">
		// 			Message submitted successfully
		// 				</div>
		// 	);
		// }

		// let errorMessage;
		// if (this.props.error) {
		// 	errorMessage = (
		// 		<div className="message message-error">{this.props.error}</div>
		// 	);
		// }


		return (
			<div>
				<form className="register" onSubmit={handleSubmit((values) => { this.onSubmit(values, this.props); })}>

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
						name="lastName"
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
						validate={[required, nonEmpty]}
					/>

					<label className="row">Teacher Code</label>
					<Field
						name="teachercode"
						component={Input}
						type="number"
						placeholder="Teacher Code"
						validate={[required, nonEmpty, isAllDigits]}
					/>

					<button
						className="row btn btn-large"
						type="submit"
						disabled={pristine || submitting}>
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
		console.log(errors, 'errors')
		return dispatch(focus('registerS', Object.keys(errors)[0]))
	}
})(connect()(RegisterFormS));


//mapStatetoProps = (dispatch) =>({type: 'REGISTER_FORM', payload})
//	<form className="register" onSubmit={handleSubmit} >
//				{/* <form className="register" onSubmit={handleSubmit(values =></form>
//				this.onSubmit(values)
//			)}> */}