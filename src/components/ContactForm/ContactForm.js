import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  FormCSS,
  LabelCSS,
  TextInputCSS,
  SubmitCSS,
} from "./styledContactForm";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleNewContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  resetState = () => {
    this.setState(INITIAL_STATE);
  };

  // Handle behavior for Input field

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // Fuctions to add new contact to list

  addContact = () => {
    const { handleNewContact } = this.props;
    const NewContact = this.createContact();
    handleNewContact(NewContact);
  };

  createContact = () => {
    const { name, number } = this.state;
    return {
      id: uuidv4(),
      name,
      number,
    };
  };

  // Define behavior on form submit

  handleSubmit = (evt) => {
    const { name, number } = this.state;
    evt.preventDefault();
    if (name === "") {
      return;
    }
    if (isNaN(number)) {
      alert("Please input phone number (only digits)!");
      return;
    }
    this.isNewContact()
      ? this.addContact()
      : alert(`${name} is already exist!`);
    this.resetState();
  };

  // Check if contact is new or existing

  isNewContact = () => {
    const { contacts } = this.props;
    return !contacts.find(
      ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormCSS onSubmit={this.handleSubmit}>
        <LabelCSS htmlFor="name_input">Name</LabelCSS>
        <TextInputCSS
          id="name_input"
          name="name"
          type="text"
          value={name}
          placeholder="Input name..."
          onChange={this.handleInputChange}
        ></TextInputCSS>
        <LabelCSS htmlFor="number_input">Phone</LabelCSS>
        <TextInputCSS
          id="number_input"
          name="number"
          type="text"
          value={number}
          placeholder="Input number..."
          onChange={this.handleInputChange}
        ></TextInputCSS>
        <SubmitCSS type="submit" value="Add contact"></SubmitCSS>
      </FormCSS>
    );
  }
}

export { ContactForm };
