
import {
	REGISTER_TEACHER_REQUEST,
	REGISTER_TEACHER_SUCCESS,
	REGISTER_TEACHER_ERROR
} from '../actions/usersT.js';
//  import onBoardingT from '../components/onBoardingT.js';
//
const initialState = {
	onBoardingT: []
};



//TODO
//login initital state
// email_signUpT: null,
// 	password_signUpT: null
//board initial state
//card id
//titles of saved cards
// names of students connected with teacher
//< Redirect to="/OnboardT" />

export default function teacherSignupReducer(state = initialState, action) {
	if (action.type === REGISTER_TEACHER_REQUEST) {
		return Object.assign({}, state, {
			data: action.data,
			error: null
		});
	} else if (action.type === REGISTER_TEACHER_SUCCESS) {
		console.log(action, 'action in registerT.reducer - line 32')
		return Object.assign({}, state, {
			onboardingT: action.OnboardingT
			// card_data: action.data //success message where is it called? TODO
			// currentUser: what the updated state will be -> store //TODO
		});
	} else if (action.type === REGISTER_TEACHER_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}

// initial state login