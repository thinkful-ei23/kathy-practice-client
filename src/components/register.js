import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';

import Input from './input';
import { required, nonEmpty, isAllDigits } from '../validators';
import './register.css';


export function RegisterForm(props) {
	const { handleSubmit, pristine, submitting } = props;

	return (
		<form className="register" onSubmit={handleSubmit(values => console.log(values, "I'm in register values"))}>
			<div className="row">
				<label>Name</label>
				<div>
					<Field
						name="name"
						component={Input}
						type="text"
						placeholder="Name"
						validate={[required, nonEmpty]}
					/>
				</div>
			</div>
			<div className="row">
				<label>Last Name</label>
				<div>
					<Field
						name="lastName"
						component={Input}
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
						component={Input}
						type="text"
						placeholder="Email"
						validate={[required, nonEmpty]}
					/>
				</div>
			</div>
			<div className="row">
				<label>Password</label>
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
			<div className="row">
				<label>Confirm Password</label>
				<div>
					<Field
						name="confirmpassword"
						component={Input}
						type="password"
						placeholder="Confirm Password"
						validate={[required, nonEmpty]}
					/>
				</div>
			</div>

			<div className="row">
				<label>Teacher Code</label>
				<div>
					<Field
						name="teachercode"
						component={Input}
						type="number"
						placeholder="Teacher Code"
						validate={[required, nonEmpty, isAllDigits]}
					/>
				</div>
			</div>


			<div className="row">
				<button
					className="btn"
					type="submit"
					disabled={pristine || submitting}>
					Login
				</button>
			</div>
		</form>

	);

}

export default reduxForm({
	form: 'register',
	onSubmitFail: (errors, dispatch) => {
		console.log(errors, 'errors')
		return dispatch(focus('register', Object.keys(errors)[0]))
	}
})(connect()(RegisterForm));


//mapStatetoProps = (dispatch) =>({type: 'REGISTER_FORM', payload})
