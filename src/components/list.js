import React from 'react';
import './list.css';


export default function List(props) {

	function handleToggle(e) {
		e.preventDefault()
		e.currentTarget.classList.toggle("active");
		var content = e.currentTarget.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	}

	return (

		<div className="list">
			<button onClick={handleToggle} className="collapsible">{...title}</button>
			<div className="content">
				<textarea className="edit" type="text" rows="4">{this.props.content}</textarea>
			</div>
		</div>
	);

}