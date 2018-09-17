// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import authReducer from './reducers/auth';
import { practiceReducer } from './reducers/course';
import protectedDataReducer from './reducers/protected-data';


// import registerTeacher from './reducers/registerT';
// import registerStudent from './reducers/registerS';

// const composeEnhancers = composeWithDevTools({
// 	// options like actionSanitizer, stateSanitizer
// });

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		protectedData: protectedDataReducer,
		course: practiceReducer
		// registerTeacher,
		// registerStudent
	}),
	applyMiddleware(thunk)
);

// composeWithDevTools({ applyMiddleware(thunk) });

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
console.log(authToken, 'trying to see authToken store') //===============================
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;

//export default createStore(practiceReducer); //TODO first try at export

