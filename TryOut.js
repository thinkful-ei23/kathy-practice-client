else if (action.type === actions.ADD_LIST) {
	let card = state.card.map((card, index) => {
		if (index !== action.cardIndex) {
			return card;
		}
		return Object.assign({}, card, {
			card: [...card.list, {
				text: action.text
			}]
		});
	});

	return Object.assign({}, state, {
		card
	});