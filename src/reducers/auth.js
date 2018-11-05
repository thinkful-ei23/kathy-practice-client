import {
	SET_AUTH_TOKEN,
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR,
	SET_LOGGED_OUT,
	CLEAR_LOGGED_OUT
} from '../actions/auth';

const initialState = {
	authToken: null, // authToken !== null does not mean it has been validated
	currentUser: null,
	loading: false,
	error: null,
	loggedOut: false
};

export default function reducer(state = initialState, action) {
	if (action.type === SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken
		});
	} else if (action.type === CLEAR_AUTH) {
		return Object.assign({}, state, {
			authToken: null,
			currentUser: null
		});
	} else if (action.type === AUTH_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === AUTH_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			currentUser: action.boardT // state is changed to dashboard
		});
	} else if (action.type === AUTH_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	} else if (action.type === SET_LOGGED_OUT) {
		return { ...state, loggedOut: true };
	} else if (action.type === CLEAR_LOGGED_OUT) {
		return { ...state, loggedOut: false };
	}
	return state;
}