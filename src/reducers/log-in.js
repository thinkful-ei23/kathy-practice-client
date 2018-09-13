import {
	LOG_IN_SUCCESS,
	LOG_IN_ERROR,
	LOG_OUT_SUCCESS
} from '../actions/log-in.js';


export class LogIn extends React.Components {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	// 	if(action.type === LOG_IN_SUCCESS) {

	// }
}