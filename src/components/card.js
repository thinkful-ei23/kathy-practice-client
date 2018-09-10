import React from 'react';
import './card.css';
import List from './list.js';
import AddList from './add-list.js';

export default function Card(props) {

	return (
		<div className="card">
			<ul>
				<li className="title">Title</li>
				<li>{props.list}</li>
				<li><List /></li>
				<li><AddList /></li>
			</ul>
		</div>

	);

};