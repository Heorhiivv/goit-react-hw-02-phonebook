import React, {Component} from "react";
import PropTypes from "prop-types";

import {v4 as uuid} from "uuid"

class ContactForm extends Component {
  static propTypes = {
    onAddContact : PropTypes.func.isRequired
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(task)

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className="PhoneBookForm" onSubmit={this.handleSubmit}>
        <label className="PhoneBookForm-label">
          Name
          <input
            className="PhoneBookForm-input"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label className="PhoneBookForm-label">
          Number
          <input
            className="PhoneBookForm-input"
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  };
};
export default ContactForm
