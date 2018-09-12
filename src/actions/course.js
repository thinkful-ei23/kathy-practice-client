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

export const ADD_CARD = 'ADD_CARD';
export const action = {
	type: ADD_CARD,
	text: 'The content of the card',
	//listIndex: 4
};
//action creator
export const ADD_CARD = 'ADD_CARD';
export const addCard = (text, listIndex) => ({
	type: ADD_CARD,
	text,
	cardIndex
});

// Use the action creator to create an action
const action = addCard('The content of the card', 4);


export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
	type: ADD_LIST,
	title,
	buttonLabel
});