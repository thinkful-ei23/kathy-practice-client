import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

import './boardT.css';
import Edit from './edit.js';
import TitleList from './title-listT.js';
import ClassList from './class-list.js';


export class BoardT extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		return (
			<section className="dash" >
				<div className="dashboard-username">
					Username: {this.props.username}
				</div>
				<div className="dashboard-name">Name: {this.props.name}</div>
				<div className="dashboard-protected-data">
					Protected data: {this.props.protectedData}
				</div>
				<div className="edit">
					<Edit />
				</div>
				<div className="flex" >
					<TitleList className="titleList" />
					<ClassList className="classList" />
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
