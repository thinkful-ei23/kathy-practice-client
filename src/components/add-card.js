import React from 'react';
import './add-card.css';

export default function AddCard(props) {

	return (

		<form className="addCard" >

			<label
				id="label-addCard"
				htmlFor="titleAddCard">Title:</label>

			<p>Name your chart before you click to add it</p>

			<input id="titleAddCard"
				className="input-AddCard "
				type="text" />

			<button

				className="btn btn-addCard"
				type="button"
				aria-label="click to add another practice chart">Add chart</button>
		</form>

	)
};

