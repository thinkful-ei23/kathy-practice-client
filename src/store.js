import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
//import cheeseReducer from './reducers/cheese.js';
import { reducer as formReducer } from 'redux-form';

// const store = createStore(
// 	cheeseReducer,
// 	state,
// 	applyMiddleware(thunk),
// 	+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//export default store;

export default createStore(
	combineReducers({
		form: formReducer
	}),
	applyMiddleware(thunk)
	+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());