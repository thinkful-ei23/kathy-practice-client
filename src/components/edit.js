import React from 'react';

import Card from './card.js';

import './edit.css';


export default function Edit(props) {
	return (
		<section className="dash">
			<div className="teacher">
				<Card />

			</div>
			<button>Save</button>
		</section>
	);

};