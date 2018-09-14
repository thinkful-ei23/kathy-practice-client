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



// In renderSelectField I needed to add {...field.input } into the select to allow redux - form to monitor it.

// < select className = "form-control" id = "sel1" {...field.input }>

// Here is the example from the redux-form website

// <Field name="favoriteColor" component="select">
//     <option />
//     <option value="#ff0000">Red</option>
//     <option value="#00ff00">Green</option>
//     <option value="#0000ff">Blue</option>
// </Field>