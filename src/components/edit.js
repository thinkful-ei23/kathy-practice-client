import React from 'react';

import CardT from './cardT.js';
import './edit.css';


export default function Edit(props) {
	return (

		<div className="teacher-card">
			<CardT />
			{/* TODO onClick onClick /> finish*/}
			<button className="btn btn-large" aria-label="click to save the practice chart" >Save</button>
		</div >

	);

};