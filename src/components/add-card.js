import React from 'react';
import './add-card.css';

export default function AddCard(props) {
	return (
		<div className="addCard">
			<form className="cardAdd" >
				<input className="form-row-AddCard  form-row-input-AddCard " type="text" placeholder="Title" />
				<div className="form-row-AddCard ">
					<button className="btnC" type="button">Add a New Card</button>
					<button className="btnC" type="button">Delete card</button>
				</div>
			</form>
		</div>
	)
};
