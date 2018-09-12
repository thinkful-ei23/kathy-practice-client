import {
	REGISTER_TEACHER_REQUEST,
	REGISTER_TEACHER_SUCCESS,
	REGISTER_TEACHER_ERROR
} from '../actions/usersT.js';

const initialState = {
	id: null,
	first_name: null,
	last_name: null,
	email: null,
	password: null
};

export default function teacherSignupReducer(state = initialState, action) {
	//console.log(state, 'Massachusetts');
	if (action.type === REGISTER_TEACHER_REQUEST) {
		return Object.assign({}, state, {
			data: action.data,
			error: null
		});
	} else if (action.type === REGISTER_TEACHER_SUCCESS) {
		return Object.assign({}, state, {
			success_message: null
		});
	} else if (action.type === REGISTER_TEACHER_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}


	return state;
}
