import React from 'react';

import ClassList from './class-list.js';
import TitleList from './title-listT.js';

export default function ClassManager(props) {
	// export default class ClassList extends React.Components{
	onSubmit(values) {
		console.log(values, 'values in login.js') // TODO
		return this.props.dispatch(assign(values.student, values.password));
	}
	// render() {
	return (
		<div className="classManager">
			<ClassList id="classList" />
			<TitleList id="titleList" />
			<button
				id="managerBtn"
				className="btn"
				aria-label="click to assign student to practice chart"
				onSubmit={this.props.handleSubmit(values =>
					//return ( before this.onSubmit(values))
					this.onSubmit(values) > Assign </button >
	</div >
		// }
	);