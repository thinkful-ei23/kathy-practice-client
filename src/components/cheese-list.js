import React from 'react';
//import { connect } from 'react-redux'
//import store from './store.js';


export default class CheeseList extends React.Component {

	render() {
		return (
			<ul>
				<li>Bath Blue</li>
				<li>Barkham Blue</li>
				<li>Buxton Blue</li>
			</ul>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		cheeses: state.cheeses
// 	};
// };

// export default connect(mapStateToProps)(CheeseList);



/*
const cheeses = [
			"Bath Blue",
			"Barkham Blue",
			"Buxton Blue"
		]
		console.log(cheeseItem, 'cheeses2')
		const cheeseItem = this.props.cheeses.map(cheeses => (
			<li>
				{cheeses}
			</li>
		));
		*/