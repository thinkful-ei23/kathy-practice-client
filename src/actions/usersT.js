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
