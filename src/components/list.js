import React from 'react';
import './list.css';


export default function List(props) {

	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.display === "block") {
				content.style.display = "none";
			} else {
				content.style.display = "block";
			}
		});
	}

	return (

		<div className="list">
			<button className="collapsible">Title of skill</button>
			<div className="content">
				<textarea className="edit" type="text" rows="4"></textarea>
			</div>
		</div>
	);

}