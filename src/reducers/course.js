//click on add
//add list
//click on cancel
//listen for value of textarea
//store value of textarea on db
//assign/connect teacher id to course card
//store title on db

//click ...
//add
//cancel
//title
//teacher id
//student id

//textarea
//title
//list title


const initialState = {
	lists: [{
		title: 'Example list 1',
		cards: [{
			text: 'Example card 1'
		}, {
			text: 'Example card 2'
		}]
	}, {
		title: 'Example list 2',
		cards: [{
			text: 'Example card 1'
		}, {
			text: 'Example card 2'
		}]
	}]
};


export const trelloReducer = (state = initialState, action) => {
	if (action.type === actions.ADD_LIST) {
		// ... do something to generate new state
		return newState;
	}
	else if (action.type === actions.ADD_CARD) {
		// ... do something to generate new state
		return newState;
	}
	return state;
};
