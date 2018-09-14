
export const ADD_CARD = 'ADD_CARD';
export const addCard = {
	type: ADD_CARD,
	title: 'practice log title',
	//listIndex: 4
};
export const EDIT_CARD = 'EDIT_CARD';
export const editCard = {
	type: EDIT_CARD
};
export const SAVE_CARD = 'SAVE_CARD';
export const saveCard = {
	type: SAVE_CARD
};
export const DELETE_CARD = 'DELETE_CARD';
export const deleteCard = {
	type: DELETE_CARD
};
//=======================================
export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
	type: ADD_LIST,
	title,
	buttonLabel
});
export const EDIT_LIST = 'EDIT_LIST';
export const editList = {
	type: EDIT_LIST
};
export const SAVE_LIST = 'SAVE_LIST';
export const saveList = {
	type: SAVE_LIST
};
export const DELETE_LIST = 'DELETE_LIST';
export const deleteList = {
	type: DELETE_LIST
};
//=======================================
export const ASSIGN_STUDENT_TO_CARD = 'ASSIGN_STUDENT_TO_CARD';
export const assignStudentToCard = {
	type: ASSIGN_STUDENT_TO_CARD
};
export const DELETE_STUDENT_TO_CARD = 'DELETE_STUDENT_TO_CARD';
export const deleteStudentToCard = {
	type: DELETE_STUDENT_TO_CARD
}

//=======================================
//=======================================




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

/*
//action creator
export const ADD_CARD = 'ADD_CARD';
export const addCard = (text, listIndex) => ({
	type: ADD_CARD,
	text,
	cardIndex
});

// Use the action creator to create an action
const action = addCard('The content of the card', 4);

*/