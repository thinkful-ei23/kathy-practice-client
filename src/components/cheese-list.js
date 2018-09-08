import React from 'react';
import React, { Component } from 'react';


export default class CheeseList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="cheeses" >
				<ul>
					<li>{this.props.name}</li>
				</ul >
			</div>
		);
	}
}