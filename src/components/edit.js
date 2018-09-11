import React from 'react';

import CardT from './cardT.js';

import './edit.css';


export default function Edit(props) {
	return (
		<section className="dash">
			<div className="teacher">
				<CardT />

			</div>
			<button className="btn">Save</button>
		</section>
	);

};