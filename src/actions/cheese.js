
export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
	type: FETCH_CHEESES_SUCCESS,
	cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
	type: FETCH_CHEESES_ERROR,
	error
});
const BASE_URL = 'http://localhost:8080';

export const fetchCheeses = () => (dispatch) => {
	//console.log('fetching a pail')
	dispatch(fetchCheesesRequest());
	return fetch(`${BASE_URL}/api/cheeses`)
		.then(res => res.json())
		.then((cheeses) => dispatch(fetchCheesesSuccess(cheeses)))
		.catch(err => {
			dispatch(fetchCheesesError(err));
		});
};


