import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//===========
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom';
// import { reduxForm, Field, focus, SubmissionError } from 'redux-form';
//==========
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import './index.css';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
