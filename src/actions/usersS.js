import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const REGISTER_STUDENT_REQUEST = 'REGISTER_STUDENT_REQUEST';
export const registerStudentRequest = () => ({
	type: REGISTER_STUDENT_REQUEST
})
export const REGISTER_STUDENT_SUCCESS = 'REGISTER_STUDENT_SUCCESS';
export const registerStudentSuccess = () => ({
	type: REGISTER_STUDENT_SUCCESS
})
export const REGISTER_STUDENT_ERROR = 'REGISTER_STUDENT_ERROR';
export const registerStudentError = () => ({
	type: REGISTER_STUDENT_ERROR
})

export const registerUser = user => dispatch => {
	return fetch(`${API_BASE_URL}/api/students`, {
		method: 'POST',
		headers: {
			'content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})

		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		//TODO should it be userS instead ???
		.then(user => dispatch(registerStudentSuccess(user))) // backend sends res, this line sends data to registerTeacherSuccess in reducer
		.catch(err => {
			const { reason, message, location } = err;
			if (reason === 'ValidationError') {
				// Convert ValidationErrors into SubmissionErrors for Redux Form
				console.log(user, "I'm in usersS actions")
				return Promise.reject(
					new SubmissionError({
						[location]: message
					})
				);
			}
		});
};
