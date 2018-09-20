import React from 'react';

import ClassList from './class-list.js';
import './class-list.css';
import TitleList from './title-listT.js';
import './title-listT.css';
import './classManager.css';

import './add-card.css';
import './add-list.css';
import './card.css';

import './classManager.css';
import './edit.css';
import './list.css';
import './nav-bar.css';
import './onBoardingT.css';

// export default class ClassManager extends React.Components {
export default function ClassManager(props) {

	// 	onSubmit(values) {
	// 		console.log(values, 'values in classManager.js')
	// 		const { student, title } = values;
	// 		return this.props
	// 			.dispatch(save(values))
	// 			.then(() => this.props.dispatch(save(values.student, values.title)));// TODO
	// 	}
	// 	const { student, title } = values;

	// onSubmit(values) {
	// 	console.log(values, 'values in classManager.js');
	// 	const { student, title } = values;
	// }
	// render() {
	return (
		<div id="managerWrapper">

			<form id="classManager"
			// onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
			// )}
			>
				<div id="classList">
					<ClassList />
				</div>
				<div id="titleList">
					<TitleList />
				</div>
				{/* <ClassList id="classList" />
				<TitleList id="titleList" /> */}
			</form>


			<div className="btn-wrapper">
				<button
					id="managerBtn"
					type="submit"
					aria-label="click to assign student to practice chart"
					onSubmit={() => this.save()}>
					Assign </button >
			</div >


		</div>

	)
};