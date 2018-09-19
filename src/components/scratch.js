import React from 'react';


import './class-list.css';

export default function selectTitle(props) {
	return (

		<form onSubmit={this.handleSubmit}>
			<label>
				Find a student:

<select value={this.state.value} onChange={this.handleChange}>
					<option value="student1">student1.1</option>
					<option value="student2">student2.1</option>
					<option value="student3">student3.1</option>
					<option value="student4">student4.1</option>
				</select>
			</label>
			<input type="submit" value="Submit" />
		</form>
	)
};