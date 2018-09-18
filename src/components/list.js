import React from 'react';
import { connect } from 'react-redux';

import './list.css';


export function List(props) {

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
			<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">{props.text}</button>
			<div className="content">
				<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">{props.content}</textarea>
			</div>
		</div>
	);

};
List.defaultProps = {
	title: '',
	content: ''
};

const mapStateToProps = state => ({
	list: state.list
});

export default connect(mapStateToProps)(List);