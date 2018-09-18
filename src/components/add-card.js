import React from 'react';
import './add-card.css';

export default function AddCard(props) {

	return (
		<div className="addCard">
			<form className="cardAdd" >
				<input className="form-row-AddCard  form-row-input-AddCard " type="text" placeholder="Title" />
				<div className="form-row-AddCard ">
					<button
						className="btn"
						type="button"
						aria-label="click to add another practice chart">Add card</button>
					<button
						className="btn"
						type="button"
						aria-label="click to delete practice chart">Delete card</button>
				</div>
			</form>
		</div>
	)
};
