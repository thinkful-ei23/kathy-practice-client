import React from 'react';
import { connect } from 'react-redux';

import List from './list.js';

import './card.css';



export class CardS extends React.Component {

	addList(text) {
		this.props.dispatch(addList(text, this.props.index));
	}

	render() {
		const list = this.props.list.map((list, index) =>
			<li key={index}>
				<List {...list} />>
				</li>
		);

		return (
			<div className="card" >
				<h4 className="title">{this.props.title} </h4>
				<ul>
					{list}
				</ul>
			</div>
		);
	}
}
CardS.defaultProps = {
	title: ''
};
const mapStateToProps = state => ({
	list: state.course.card[0].list
});

export default connect(mapStateToProps)(CardS);