import React from 'react';

import CardT from './cardT.js';
import './edit.css';


export default function Edit(props) {
	return (

		<div className="teacher-card">
			<CardT />
			<button className="btn btn-large">Save</button>
		</div >

	);

};