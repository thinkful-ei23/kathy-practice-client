import React from 'react';
import './card.css';
import List from './list';
import AddList from './add-list';

export default function CardT(props) {

	return (
		<div className="card">
			<h4 className="title">Title</h4>
			<ul>
				<li>{props.list}</li>
				<li><List /></li>
				<li><List /></li>
				<li><List /></li>
				<li><AddList /></li>
			</ul>
		</div>

	);

};