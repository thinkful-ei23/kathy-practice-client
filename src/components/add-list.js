import React from 'react';
import './add-list.css';

export default class AddList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event) {
		event.preventDefault();
		const text = this.textInput.value.trim();
		if (text && this.props.onAdd) {
			this.props.onAdd(this.textInput.value)
		}
		this.textInput.value = '';
	}
	setEditing(editing) {
		this.setState({
			editing
		});
	}

	render() {
		if (!this.state.editing) {
			return (
				<div className="add-button"
					onClick={() => this.setEditing(true)}>
					<a href="#">Add a  {this.props.type}...</a></div>
			);
		}

		return (
			<div className="addList">
				<form className="add-list" >
					<input className="form-row form-row-input" type="text" placeholder="Type in new skill or topic" />
					<div className="form-row">
						<button className="btnL" type="button">Add a new list</button>
						<button className="btnL" type="button" onClick={() => this.setEditing(false)}>Cancel list</button>
					</div>
				</form>
			</div>
		);
	};
}


/*
xport default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        console.log(text);
        // TODO: Add the card or list
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        if (!this.state.editing) {
            const text = `Add a ${this.props.type}`;
            return (
                <div className="add-button"
                    onClick={() => this.setEditing(true)}>
                    <a href="#">{text}...</a>
                </div>
            );
        }
        const label = `Enter a ${this.props.type}`;
        return (
            <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
                <input
                    type="text"
                    ref={input => this.textInput = input}
                    aria-label={label}
                />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}

*/