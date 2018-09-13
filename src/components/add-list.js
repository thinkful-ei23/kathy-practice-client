import React from 'react';
import './add-list.css';


export default function AddList(props) {
	return (
		<div className="add">
			<form className="add-list" >
				<input className="form-row form-row-input" type="text" />
				<div className="form-row">
					<button className="btn" type="button">Add</button>
					<button className="btn" type="button">Cancel</button>
				</div>
			</form>
		</div>

	);


};

// 	<div className="form-row">  </div></div>
// 				<div className="form-row">	</div>