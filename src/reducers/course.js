import {
	ADD_LIST,
	ADD_CARD,
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDT_SUCCESS
} from '../actions/courses';

const initialState = {
	// card sample with one list
	card: [{
		title: '',
		list: [{ title: '', content: '' }]
	}]
};

export const practiceReducer = (state = initialState, action) => {

	if (action.type === actions.ADD_CARD) {
		return Object.assign({}, state, {
			card: [...state.card, {
				title: action.title,
				content: '',
				list: []
			}]
		});

	} else if (action.type === actions.ADD_LIST) {
		let card = state.card.map((card, index) => {
			if (index !== action.cardIndex) {
				return card;
			}
			return Object.assign({}, card, {
				card: [...card.list, {
					text: action.text
				}]
			});
		});
		return Object.assign({}, state, {
			card
		});
	} else if (action.type === actions.FETCH_BOARDS_SUCCESS) {
		return action.boardS;

	} else if (action.type === actions.FETCH_BOARDT_SUCCESS) {
		return action.boardT;

	}
	return state;
};


// 	//one list sample
	// 	list: [{ title: 'Example Skill 1', content: 'Sample content to edit' }];
	// 	// card sample with 3 lists
	// 	card: [{
	// 		title: 'Sample of Log Title',
	// 		list: [{ title: 'Example Skill 1', content: 'Sample1 content to edit in textarea' },
	// 		{ title: 'Example Skill 2', content: 'Sample2 content to edit in textarea' },
	// 		{ title: 'Example Skill 3', content: 'Sample3 content to edit in textarea' }]
	// 	}];
