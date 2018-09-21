import {
	REGISTER_TEACHER_REQUEST,
	REGISTER_TEACHER_SUCCESS,
	REGISTER_TEACHER_ERROR
} from '../actions/usersT.js';

const initialState = {
	id: null,
	first_name_signUpT: null,
	last_name_signUpT: null,
	email_signUpT: null,
	password_signUpT: null,
	card_data: null

}; //TODO
//login initital state
// email_signUpT: null,
// 	password_signUpT: null
//board initial state
//card id
//titles of saved cards
// names of students connected with teacher


export default function teacherSignupReducer(state = initialState, action) {
	if (action.type === REGISTER_TEACHER_REQUEST) {
		return Object.assign({}, state, {
			data: action.data,
			error: null
		});
	} else if (action.type === REGISTER_TEACHER_SUCCESS) {
		console.log(action, 'action in registerT.reducer')
		return Object.assign({}, state, {
			card_data: action.data //success message where is it called? TODO
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