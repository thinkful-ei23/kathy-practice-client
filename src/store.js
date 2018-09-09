import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheese.js';

const store = createStore(
	cheeseReducer,
	applyMiddleware(thunk),
	+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
