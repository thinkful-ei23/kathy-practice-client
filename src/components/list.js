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
			<button onClick={handleToggle} className="collapsible">{props.text}</button>
			<div className="content">
				<textarea className="edit" type="text" rows="4">{props.content}</textarea>
			</div>
		</div>
	);

};
List.defaultProps = {
	title: '',
	content: ''
};
//TODO change to stateful? and add below
const mapStateToProps = state => ({
	list: state.list
});

// export default connect(mapStateToProps)(List);