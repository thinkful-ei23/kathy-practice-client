import { API_BASE_URL } from ',,/config';

export const ADD_CARD = 'ADD_CARD';
export const addCard = ({
	type: ADD_CARD,
	title: ''
	//listIndex: 4
});

export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
	type: ADD_LIST,
	title: '',
	content: ''
});

export const FETCH_BOARDT_SUCCESS = 'FETCH_BOARDT_SUCCESS';
export const fetchBoardTSuccess = boardT => ({
	type: FETCH_BOARDT_SUCCESS,
	boardT
});

export const fetchBoardT = () => dispatch => {
	fetch(`${API_BASE_URL}/boardT`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(boardT => {
			dispatch(fetchBoardSuccess(boardT));
		});
};

export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const fetchBoardSSuccess = boardS => ({
	type: FETCH_BOARDS_SUCCESS,
	boardS
});

export const fetchBoardS = () => dispatch => {
	fetch(`${API_BASE_URL}/boardS`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(boardS => {
			dispatch(fetchBoardSuccess(boardS));
		});
};



//=======================================

// export const ASSIGN_CARD_TO_STUDENT = 'ASSIGN_CARD_TO_STUDENT';
// export const assignCardToStudent = {
// 	type: ASSIGN_CARD_TO_STUDENT
// };
// export const UPDATE_CARD_TO_STUDENT = 'UPDATE_CARD_TO_STUDENT';
// export const updateCardToStudent = {
// 	type: UPDATE_CARD_TO_STUDENT
// }

