import {
	REGISTER_TEACHER_REQUEST,
	REGISTER_TEACHER_SUCCESS,
	REGISTER_TEACHER_ERROR
} from '../actions/usersS.js';

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








// import REGISTER_STUDENT from '../actions/users.js';
// const initialState = {
// 	id: null,
// 	name: null,
// 	last_name: null,
// 	email: null,
// 	password: null,
// 	teacher_code: null
// };
