import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
//import cheeseReducer from './reducers/cheese.js';
import { reducer as formReducer } from 'redux-form';
import registerTeacher from './reducers/registerT';
import registerStudent from './reducers/registerS';

// const store = createStore(
// 	cheeseReducer,
// 	state,
// 	applyMiddleware(thunk),
// 	+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//export default store;

export default createStore(
	combineReducers({
		form: formReducer,
		registerTeacher,
		registerStudent
	}),
	applyMiddleware(thunk)
	+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());