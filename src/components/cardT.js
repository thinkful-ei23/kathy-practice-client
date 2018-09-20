import React from 'react';
import { connect } from 'react-redux';

import List from './list';
import AddList from './add-list';
import { addList } from '../actions/course';

import './card.css';

export class CardT extends React.Component {

	addList(text) {
		this.props.dispatch(addList(text, this.props.index));
	}

	render() {

		const list = this.props.list.map((list, index) =>
			<li key={index}>
				<List {...list} />
			</li>
		);
		return (
			<div className="card">
				<h3 className="title">{this.props.title}</h3>
				<ul className="cardT">
					{list}
					<li><AddList
						type="list"
						onAdd={text => this.addList(text)}
						aria-label="click to add another element in the practice chart"
					/>
					</li>
				</ul>
			</div>

		);
	}
}
CardT.defaultProps = {
	title: ''
};
const mapStateToProps = state => ({
	list: state.course.card[0].list
});

export default connect(mapStateToProps)(CardT);
