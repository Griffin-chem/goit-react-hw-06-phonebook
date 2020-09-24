import React, { Component } from "react";

import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchField } from "./components/SearchField/SearchField";
import { ContactList } from "./components/ContactList/ContactList";

import { AppCSS, Caption, SubTitle } from "./styledApp";

import "./App.css";

const filterContacts = (array, query) => {
  return array.filter(
    (contact) => contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
};

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  // Handle behavior for Search field

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // Define array of contacts to be shown

  contactsToShow = () => {
    const { contacts, filter } = this.state;
    const isFiltered = !!filter;
    return isFiltered ? filterContacts(contacts, filter) : this.state.contacts;
  };

  // Function to add new contact - goes to child

  addNewContact = (newContact) => {
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  // Function to remove new contact - goes to child

  removeContact = (contactIDToRemove) => {
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts.filter(({ id }) => id !== contactIDToRemove)],
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <AppCSS>
        <Caption>Phonebook</Caption>
        <ContactForm
          contacts={contacts}
          handleNewContact={this.addNewContact}
        ></ContactForm>
        <SubTitle>Contacts</SubTitle>
        <SearchField
          filter={filter}
          onChange={this.handleInputChange}
        ></SearchField>
        <ContactList
          contacts={this.contactsToShow()}
          onDelete={this.removeContact}
        ></ContactList>
      </AppCSS>
    );
  }
}

export default App;
