import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
//import store from './store.js';
import './index.css';
import App from './App';
//import CheeseList from './components/cheese-list.js';



ReactDOM.render(
	<App />, document.getElementById('root'));
registerServiceWorker();
