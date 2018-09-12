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

