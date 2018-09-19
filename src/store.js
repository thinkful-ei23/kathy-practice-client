/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import authReducer from './reducers/auth';
import { practiceReducer } from './reducers/course';
import protectedDataReducer from './reducers/protected-data';

// import registerTeacher from './reducers/registerT';
// import registerStudent from './reducers/registerS';

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		protectedData: protectedDataReducer,
		course: practiceReducer

	}),
	composeWithDevTools(
		applyMiddleware(thunk)
	));

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
// TODO console.log(authToken, 'trying to see authToken store')
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;


