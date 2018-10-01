import {
	REGISTER_STUDENT_REQUEST,
	REGISTER_STUDENT_SUCCESS,
	REGISTER_STUDENT_ERROR
} from '../actions/usersS.js';

// import OnBoardingS from '../components/onBoardingS.js';

const initialState = {
	// id: null,
	// first_name: null,
	// last_name: null,
	// email: null,
	// password: null,
	// teacher_code: null,
	onBoardingS: null
};


export default function reducer(state = initialState, action) {
	if (action.type === REGISTER_STUDENT_REQUEST) {
		return Object.assign({}, state, {
			data: action.data,
			error: null
		});
	} else if (action.type === REGISTER_STUDENT_SUCCESS) {
		return Object.assign({}, state, {
			// success_message:
			onBoardingS: action.onBoardingS
		});
	} else if (action.type === REGISTER_STUDENT_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}


	return state;
}
