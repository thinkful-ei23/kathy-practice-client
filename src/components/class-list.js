import React from 'react';


import './class-list.css';

export default function ClassList(props) {
	return (

		<div className="classlist">
			<h5>Class List</h5>
			<ul>
				<li>Student 1</li>
				<li>Student 2</li>
				<li>Student 3</li>
				<li>Student 4</li>
				<li>Student 5</li>
				<li>Student 6</li>
				<li>Student 7</li>
			</ul>
			<button className="btn">Assign</button>
		</div>

	);

};