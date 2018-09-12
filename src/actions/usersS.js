import { SubmissionError } from 'redux-form';

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
export const registerTeacher = (values) => (dispatch) => {
	console.log(values, 'Values')
	return fetch('/api/teachers', {
		method: 'POST',
		body: JSON.stringify(values),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => {
			console.log(res, 'results here')
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
		.then((data) => console.log('Submitted with data', data))
	// .catch(err => {
	// 	console.log(err, 'error')
	// 	const { reason, message, location } = err;
	// 	if (reason === 'ValidationError') {
	// 		// Convert ValidationErrors into SubmissionErrors for Redux Form
	// 		return Promise.reject(
	// 			new SubmissionError({
	// 				[location]: message
	// 			})
	// 		);
	// 	}
	// 	return Promise.reject(
	// 		new SubmissionError({
	// 			_error: 'Error submitting message'
	// 		})
	// 	);
	// });
}





// export const REGISTER_STUDENT_REQUEST = 'REGISTER_STUDENT_REQUEST';
// export const registerStudentRequest = () => ({
// 	type: REGISTER_STUDENT_REQUEST,
// 	payload: name,
// 	last_name,
// 	email,
// 	password,
// 	teacher_code,
// })

// export const REGISTER_STUDENT_ = 'REGISTER_STUDENT';
// export const registerStudent = () => ({
// 	type: REGISTER_STUDENT,
// 	payload: name,
// 	last_name,
// 	email,
// 	password,
// 	teacher_code,
// })
// export const REGISTER_STUDENT = 'REGISTER_STUDENT';
// export const registerStudent = () => ({
// 	type: REGISTER_STUDENT,
// 	payload: name,
// 	last_name,
// 	email,
// 	password,
// 	teacher_code,
// })

