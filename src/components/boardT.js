import React from 'react';


import './card.css';
import Card from './card.js';
//import Edit from './components/edit.js';

export default function BoardS(props) {
	return (
		<section className="dash">
			<div className="teacher">
				<Card />

			</div>
			<button>Log out</button>
		</section>
	);

};