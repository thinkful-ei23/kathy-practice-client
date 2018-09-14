
//==================
// const initialState = {
// 	lists: [{
// 		title: 'Example list 1',
// 		cards: [{
// 			text: 'Example card 1'
// 		}, {
// 			text: 'Example card 2'
// 		}]
// 	}, {
// 		title: 'Example list 2',
// 		cards: [{
// 			text: 'Example card 1'
// 		}, {
// 			text: 'Example card 2'
// 		}]
// 	}]
// };

// lists: [
// 	{ title: 'Example list 1', cards: [{ text: 'Example card 1' }, { text: 'Example card 2' }] },
// 	{ title: 'Example list 2', cards: [{ text: 'Example card 1' }, { text: 'Example card 2' }] }];

ADD_CARD
EDIT_CARD
SAVE_CARD
DELETE_CARD //(cancel button)
ADD_LIST
EDIT_LIST
SAVE_LIST
DELETE_LIST
ASSIGN_STUDENT_TO_CARD
DELETE_STUDENT_TO_CARD
//========================
//+++++++++++
const initialState = {
	//one list sample
	list: [{ title: 'Example Skill 1', content: 'Sample content to edit' }];


	// card sample with 3 lists
	card: [{
		title: 'Sample of Log Title',
		list: [{ title: 'Example Skill 1', content: 'Sample1 content to edit in textarea' },
		{ title: 'Example Skill 2', content: 'Sample2 content to edit in textarea' },
		{ title: 'Example Skill 3', content: 'Sample3 content to edit in textarea' }]
	}];
	// card sample with room for one list
	card: [{
		title: 'Sample of Log Title',
		list: [{ title: 'Example Skill 1', content: 'Sample1 content to edit in textarea' }]
	}]
};
//===============

//============
//+++++++++++++

export const ListReducer = (state = initialState, action) => {
	if (action.type === actions.ADD_LIST) {
		// ... do something to generate new state
		return newState;
	}
	else if (action.type === actions.EDIT_LIST) {
		// ... do something to generate new state
		return newState;
	}
	else if (action.type === actions.SAVE_LIST) {
		// ... do something to generate new state
		return newState;
	}
	else if (action.type === actions.DELETE_LIST) {
		// ... do something to generate new state
		return newState;
	}
	return state;
};
//=============
export const trelloReducer = (state = initialState, action) => {
	if (action.type === actions.ADD_LIST) {
		return Object.assign({}, state, {
			lists: [...state.lists, {
				title: action.title,
				cards: []
			}]
		});
	}
	else if (action.type === actions.ADD_CARD) {
		let lists = state.lists.map((list, index) => {
			if (index !== action.listIndex) {
				return list;
			}
			return Object.assign({}, list, {
				cards: [...list.cards, {
					text: action.text
				}]
			});
		});

		return Object.assign({}, state, {
			lists
		});
	}
	return state;
};