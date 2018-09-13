import React from 'react';


import './class-list.css';

export default function ClassList(props) {
	return (

		<div className="classlist">
			<h5 className="classTitle">Class List</h5>
			<ul className="classRoom">
				<li className="student">Student 1</li>
				<li className="student">Student 2</li>
				<li className="student">Student 3</li>
				<li className="student">Student 4</li>
				<li className="student">Student 5</li>
				<li className="student">Student 6</li>
				<li className="student">Student 7</li>
			</ul>
			<button className="btn">Assign</button>
		</div>

	);

};