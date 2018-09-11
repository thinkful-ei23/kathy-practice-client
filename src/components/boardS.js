import React from 'react';

import './card.css';
import CardS from './cardS.js';

export default function BoardS(props) {
	return (
		<section className="dash">
			<div className="student">
				<CardS />

			</div>
			<button className="btn" >Log out</button>
		</section>
	);

};