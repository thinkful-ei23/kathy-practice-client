import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


export const registerUser = user => dispatch => {
	// console.log(user, 'in actions/userT') // TODO
	return fetch(`${API_BASE_URL}/api/teachers`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(res => normalizeResponseErrors(res)) //normalizes the response from regT form
		.then(res => res.json()) //sends the res as a req to backend
		.then(user => dispatch(registerTeacherSuccess(user))) // backend sends res, this line sends data to registerTeacherSuccess in reducer
		.catch(err => {
			const { reason, message, location } = err;
			if (reason === 'ValidationError') {
				// Convert ValidationErrors into SubmissionErrors for Redux Form
				// TODO	console.log('usersT in actions line 23', user)
				return Promise.reject(
					new SubmissionError({
						[location]: message
					})
				);
			}
		});
};
// export const registerUser = user => dispatch => {
// 	console.log('before line 7')
// 	return fetch(`${API_BASE_URL}/api/teachers`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(user)
// 	})
// 		.then(res => normalizeResponseErrors(res))
// 		.then(res => res.json())
// 		.then(data => { console.log(data) })
// 		.catch(err => {
// 			const { reason } = err;  //original const { reason, message, location } = err;
// 			if (reason === 'ValidationError') {
// 				const { reason, message, location } = err;
// 				if (reason === 'ValidationError') {
// 					// Convert ValidationErrors into SubmissionErrors for Redux Form
// 					return Promise.reject(
// 						new SubmissionError({
// 							[location]: message
// 						})
// 					);
// 				}
// 			}
// 		});
// };

export const REGISTER_TEACHER_REQUEST = 'REGISTER_TEACHER_REQUEST';
export const registerTeacherRequest = () => ({
	type: REGISTER_TEACHER_REQUEST,
})

export const REGISTER_TEACHER_SUCCESS = 'REGISTER_TEACHER_SUCCESS';
export const registerTeacherSuccess = () => ({
	type: REGISTER_TEACHER_SUCCESS,
})

export const REGISTER_TEACHER_ERROR = 'REGISTER_TEACHER_ERROR';
export const registerTeacherError = () => ({
	type: REGISTER_TEACHER_ERROR,
})