import React from 'react';
import './card.css';
import List from './list.js';


export default function CardS(props) {

	return (
		<div className="card">
			<h4 className="title">Title</h4>
			<ul>
				<li>{props.list}</li>
				<li><List /></li>
				<li><List /></li>
				<li><List /></li>
				<li><List /></li>
				<li><List /></li>
			</ul>
		</div>

	);

};