import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

import './card.css';
import CardS from './cardS.js';
import NavBar from './nav-bar.js';


export class BoardS extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}
	render() {
		return (
			<section className="dash" >
				<NavBar />
				<div className="student">
					<CardS />
				</div>
			</section>
		);
	}
};
const mapStateToProps = state => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		name: `${currentUser.firstName} ${currentUser.lastName}`,
		protectedData: state.protectedData.data
	};
};

export default requiresLogin()(connect(mapStateToProps)(BoardS));
// export default (connect(mapStateToProps)(BoardS));


/*

div className="dashboard-username">
					Username: {this.props.username}
				</div>
				<div className="dashboard-name">Name: {this.props.name}</div>
				<div className="dashboard-protected-data">
					Protected data: {this.props.protectedData}
				</div>
				*/