//import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
// import protectedDataReducer from './reducers/protected-data';
import { setAuthToken, refreshAuthToken } from './actions/auth';

// import registerTeacher from './reducers/registerT';
// import registerStudent from './reducers/registerS';

// const composeEnhancers = composeWithDevTools({
// 	// options like actionSanitizer, stateSanitizer
// });

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		// protectedData: protectedDataReducer,
		// registerTeacher,
		// registerStudent
	}),
	applyMiddleware(thunk)
);

// 	composeWithDevTools({ applyMiddleware(thunk) })
// 	//+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;
