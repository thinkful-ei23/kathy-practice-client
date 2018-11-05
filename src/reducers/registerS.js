import {
	REGISTER_STUDENT_REQUEST,
	REGISTER_STUDENT_SUCCESS,
	REGISTER_STUDENT_ERROR
} from '../actions/usersS.js';

// import OnBoardingS from '../components/onBoardingS.js';
const initialState = {
	authToken: null, // authToken !== null does not mean it has been validated
	currentUser: null,
	loading: false,
	error: null,
	loggedOut: false
};

export default function reducer(state = initialState, action) {
	if (action.type === REGISTER_STUDENT_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	} else if (action.type === REGISTER_STUDENT_SUCCESS) {
		return Object.assign({}, state, {
			currentUser: action.OnboardingS,
			loading: false
		});
	} else if (action.type === REGISTER_STUDENT_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	return state;
}
