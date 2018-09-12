import { SubmissionError } from 'redux-form';

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

