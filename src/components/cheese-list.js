import React from 'react';
import React, { Component } from 'react';


export default class CheeseList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const cheeseItems = this.props.cheese.map(cheese => (<li>{cheese}</li>));
		return (
			<ul>
				{cheeseItems}
			</ul >
		);
	}
}