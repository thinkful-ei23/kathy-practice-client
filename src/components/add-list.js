import React from 'react';
import './add-list.css';
//TODO - import connect and add connect()() below

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

  render() {  //TODO not sure how the button is to work
    // if (!this.state.editing) {
    //     return (
    //         <div className="add-button"
    //             onClick={() => this.setEditing(true)}>
    //             <a href="List.js">Add a  {this.props.type}...</a></div>
    //     );
    // }

    return (
      <form className="addList" >

        <label
          id="label-addList"
          htmlFor="input-addList">Row Title:</label>

        <p>Type in new skill or topic</p>

        <input id="input-addList"
          className="input-addList" type="text" />

        <div className="row-addList">
          <button
            className="btn btn-addList"
            type="button"
            onClick={() => this.setEditing(false)}
            aria-label="click to add another row">Add row</button>

          <button
            className="btn"
            type="button"
            onClick={() => this.setEditing(false)}
            aria-label="click to cancel a row">Cancel row</button>
        </div>
      </form>

    );
  };
}


/*
export default class AddForm extends React.Component {
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