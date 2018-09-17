import React from 'react';
import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions/usersT';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches } from '../validators';
import './register.css';
const matchesPassword = matches('password');
console.log(registerUser, "I am a user")

export class RegisterFormT extends React.Component {

	onSubmit(values) {
		const { username, password, firstName, lastName } = values;
		const user = { username, password, firstName, lastName };

		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

	//=====================================
	render() {
		return (
			<div>
				<form className="register" onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>

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
						validate={[required, nonEmpty, matchesPassword]}
					/>

					<button
						className="row btn btn-large"
						type="submit"
						disabled={this.props.pristine || this.props.submitting}>
						Sign Up
				</button>
				</form >
			</div>

		);
	}
}
const onSubmitFail = (errors, dispatch, submitError) => {
	if (submitError instanceof SubmissionError) {
		console.log(submitError, 'Here in hello world')
		// optionally do something
	} else {
		throw submitError // or handle it
	}
}

RegisterFormT = connect()(RegisterFormT)
export default reduxForm({
	form: 'registerT',
	// onSubmitFail
	onSubmitFail: (error, dispatch) => {
		console.log(error, 'errors in the bottom of regT/components')

		return dispatch(focus('registerT', Object.keys(error)[0]))
	}
})(RegisterFormT)





	//console.log(res, 'results here in regT compoenents line 22ish')
// 	if (!res.ok) {
// 		if (
// 			res.headers.has('content-type') &&
// 			res.headers
// 				.get('content-type')
// 				.startsWith('application/json')
// 		) {
// 			// It's a nice JSON error returned by us, so decode it
// 			return res.json().then(err => Promise.reject(err));
// 		}
// 		// It's a less informative error returned by express
// 		return Promise.reject({
// 			code: res.status,
// 			message: res.statusText
// 		});
// 	}
// 	return res.json();
// })
// 			.then((data) => console.log('Submitted with dataT', data))
// 	.catch(err => {
// 		//console.log(err, 'error regT componenets line 43ish')

// 		return Promise.reject(
// 			new SubmissionError({
// 				_error: 'Error submitting message'
// 			})
// 		);
// 	});


// const { handleSubmit, pristine, submitting } = this.props;
// let successMessage;
// if (this.props.submitSucceeded) {
// 	successMessage = (
// 		<div className="message message-success">
// 			Message submitted successfully
// 						</div>
// 	);
// }
// let errorMessage;
// if (this.props.error) {
// 	errorMessage = (
// 		<div className="message message-error">{this.props.error}</div>
// 	);
// }

/*

const mapStateToProps = state => ({
	form: state.form
});
*/