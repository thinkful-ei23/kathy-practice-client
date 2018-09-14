import React from 'react';
import './add-list.css';

export default function AddList(props) {
	return (
		<div className="addList">
			<form className="add-list" >
				<input className="form-row form-row-input" type="text" placeholder="Type in new skill or topic" />
				<div className="form-row">
					<button className="btnL" type="button">Add a new list</button>
					<button className="btnL" type="button">Cancel list</button>
				</div>
			</form>
		</div>
	);
};
