import { SubmissionError } from 'redux-form';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const logInSuccess = () => ({
	type: LOG_IN_SUCCESS,
})

export const LOG_IN_ERROR = 'LOG_IN_ERROR';
export const logInError = () => ({
	type: LOG_IN_ERROR,
})

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const logOutSuccess = () => ({
	type: LOG_OUT_SUCCESS,
})