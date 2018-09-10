import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';
import './register.css';


export function RegisterForm(props) {
	const { handleSubmit, pristine, reset, submitting } = props;

	return (
		<form className="register" onSubmit={handleSubmit}>
			<div className="row">
				<label>Name</label>
				<div>
					<Field
						name="name"
						component="input"
						type="text"
						placeholder="Name"
					//validate={[required, nonEmpty, isTrimmed]}
					/>
				</div>
			</div>
			<div className="row">
				<label>Last Name</label>
				<div>
					<Field
						name="lastName"
						component="input"
						type="text"
						placeholder="Last Name (optional)"
					//validate={isTrimmed}
					/>
				</div>
			</div>

			<div className="row">
				<label>Email</label>
				<div>
					<Field
						name="email"
						component="input"
						type="text"
						placeholder="Email"
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
				<label>Confirm Password</label>
				<div>
					<Field
						name="confirmpassword"
						component="input"
						type="text"
						placeholder="Confirm Password"
					//validate={[required, nonEmpty, isTrimmed]}
					/>
				</div>
			</div>

			<div className="row">
				<label>Teacher Code</label>
				<div>
					<Field
						name="teachercode"
						component="input"
						type="text"
						placeholder="Teacher Code"
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

RegisterForm = connect()(RegisterForm);

export default reduxForm({
	form: 'register',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors')
		return dispatch(focus('register', Object.keys(errors)[0]))
	}
})(RegisterForm);
