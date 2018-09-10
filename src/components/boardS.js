import React from 'react';

import './card.css';
import Card from './card.js';

export default function BoardS(props) {
	return (
		<section className="dash">
			<div className="student">
				<Card />
				<Card />
			</div>
			<button>Log out</button>
		</section>
	);

};