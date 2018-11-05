import {
	REGISTER_TEACHER_REQUEST,
	REGISTER_TEACHER_SUCCESS,
	REGISTER_TEACHER_ERROR
} from '../actions/usersT.js';
//  import onBoardingT from '../components/onBoardingT.js';

const initialState = {
	authToken: null, // authToken !== null does not mean it has been validated
	currentUser: null,
	loading: false,
	error: null,
	loggedOut: false
};

export default function teacherSignupReducer(state = initialState, action) {
	if (action.type === REGISTER_TEACHER_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
		});
		console.log("is there an error here? registerT reducer")
	} else if (action.type === REGISTER_TEACHER_SUCCESS) {
		// TODO console.log(action, 'action in registerT.reducer - line 24 - - - - - - - - - - - - - - - - - -')
		return Object.assign({}, state, {
			currentUser: action.OnboardingT,
			loading: false
		});
	} else if (action.type === REGISTER_TEACHER_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	}
	//TODO
	console.log(action.error, 'error in registerT.reducer - line 35 - - - - - - - - - - - - - - - - - -')

	return state;
}



