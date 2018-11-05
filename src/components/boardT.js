import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

import './boardT.css';
import Edit from './edit.js';
import ClassManager from './classManager';
import AddCard from './add-card.js';
import NavBar from './nav-bar.js';

export class BoardT extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData()); //GET query TODO
	}
	// addCard(title) { TODO need this?
	// 	this.props.dispatch(addCard(title, this.props.match.params.card));
	// }

	render() {
		return (
			<section className="dash" >
				<NavBar />
				<div className="edit">
					<AddCard />
					<Edit />
				</div>
				<div className="flex" >
					<ClassManager />
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.firstName} ${currentUser.lastName}`,
		protectedData: state.protectedData.data
	};
};
export default requiresLogin()(connect(mapStateToProps)(BoardT));
// export default (connect(mapStateToProps)(BoardT));



/*
	 <div className="dashboard-username">
				Username: {this.props.username}
				</div>
				*/
