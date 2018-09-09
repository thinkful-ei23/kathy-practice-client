import { API_BASE_URL } from './config.js';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = () => ({
	type: FETCH_CHEESES_SUCCESS,
	cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = () => ({
	type: FETCH_CHEESES_ERROR,
	error
});

export const fetchCheeses = () => (dispatch) => {
	dispatch(fetchCheesesRequest());
	return fetch(`${API_BASE_URL}/api/cheeses`)
		.then(res => res.json())
		.then((cheeses) => dispatch(fetchCheesesSuccess(cheeses)))
		.catch(err => {
			dispatch(fetchCheesesError(err));
		});
};


