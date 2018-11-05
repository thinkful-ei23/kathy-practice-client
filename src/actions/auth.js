import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
	type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
	type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
	type: AUTH_SUCCESS,
	currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
	type: AUTH_ERROR,
	error
});
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
export const setLoggedOut = () => ({
	type: SET_LOGGED_OUT
});

export const CLEAR_LOGGED_OUT = 'CLEAR_LOGGED_OUT';
export const clearLoggedOut = () => ({
	type: CLEAR_LOGGED_OUT
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(authSuccess(decodedToken.user));
	saveAuthToken(authToken);
};
export const login = (email_signUpT, password_signUpT) => dispatch => {
	dispatch(authRequest());
	//TODO
	console.log('i am in auth.js', authRequest)
	return (
		fetch(`${API_BASE_URL}/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email_signUpT,
				password_signUpT
			})
		})
			// Reject any requests which don't return a 200 status, creating
			// errors which follow a consistent format
			// TODO console.log('i am in auth.js 5------------')
			.then(res => normalizeResponseErrors(res))
			.then(res => res.json())
			.then(({ authToken }) => storeAuthInfo(authToken, dispatch))
			.catch(err => {
				// TODO
				console.log(err, 'looking for err in actions/auth/login-line 76 +++++++++++++++++++++++++++++++++++++')
				const { reason, message, location } = err;
				// TODO
				console.log(reason, message, location, 'looking for reason, message, location, in actions/auth/login - line 79 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

				if (reason === 'AuthenticationError' || reason === 'ValidationError') {
					return Promise.reject(
						new SubmissionError({
							[location]: message
						})
					);
				}
				//TODO
				console.log('i am in auth. after return', authRequest)
				// Could not authenticate, so return a SubmissionError for Redux
				// Form
				// TODO console.log('+++++++++++++++i am in actions/auth.js 5')
				return Promise.reject(
					new SubmissionError({
						_error: 'Your credentials are not correct'
					})
				);
			})
	);
};

export const refreshAuthToken = () => (dispatch, getState) => {
	dispatch(authRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/api/auth/refresh`, {
		method: 'POST',
		headers: {
			// Provide our existing token as credentials to get a new one
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({ authToken }) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			// We couldn't get a refresh token because our current credentials
			// are invalid or expired, or something else went wrong, so clear
			// them and sign us out
			dispatch(authError(err));
			dispatch(clearAuth());
			clearAuthToken(authToken);
		});
};