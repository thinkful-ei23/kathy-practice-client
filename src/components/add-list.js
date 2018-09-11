import React from 'react';
import './add-list.css';


export default function AddList(props) {
	return (
		<div className="add">


			<form className="add-list" >
				<div className="form-row">
					<input type="text" />
				</div>
				<div className="form-row">
					<button className="btn" type="button">Add</button>
					<button className="btn" type="button">Cancel</button>
				</div>
			</form>


		</div>

	);


};