import React from 'react';
import './list.css';


export default function List(props) {
	return (

		<div className="list">
			<button className="collapsible">Title of skill</button>
			<div className="content">
				<textarea className="edit" type="text" rows="4"></textarea>
			</div>
		</div>
	);

}