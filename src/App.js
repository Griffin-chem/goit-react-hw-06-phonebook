import React, { Component } from 'react';
import './App.css';

import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchField } from './components/SearchField/SearchField';
import { ContactList } from './components/ContactList/ContactList';

import { 
  AppCSS,
  Caption,
  SubTitle
 } from './styledApp';

const filterContacts = (array, query) => {
  return array.filter(contact => contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
};

class App extends Component {

  state = {
    contacts: [],
    filter: ''
  };

  // Handle behavior for Search field

  handleInputChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value});
  };

  // Define array of contacts to be shown

  contactsToShow = () => {
    const { contacts, filter } = this.state;
    const isFiltered = !!filter;
    return (isFiltered
      ? filterContacts(contacts, filter)
      : this.state.contacts)
  } 

  // Function to add new contact - goes to child

  addNewContact = (NewContact) => {
    this.setState(({ contacts }) => {
      return {contacts: [...contacts, NewContact]}});
  }
  
  // Function to remove new contact - goes to child

  removeContact = (contactIDToRemove) => {
    this.setState(({ contacts }) => {
      return {contacts: [...contacts.filter(({id}) => id !== contactIDToRemove)]}
    })
  }

  componentDidMount() {
    let storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts === null) {storedContacts = []}
    this.setState({contacts: storedContacts});
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {localStorage.setItem("contacts", JSON.stringify(this.state.contacts))}
  }

  render() {
  const { filter, contacts } = this.state;
  
  return (
    <AppCSS>
      <Caption>Phonebook</Caption>
      <ContactForm contacts={contacts} handleNewContact={this.addNewContact}></ContactForm>
      <SubTitle>Contacts</SubTitle>
      <SearchField filter={filter} onChange={this.handleInputChange}></SearchField>
      <ContactList contacts={this.contactsToShow()} onDelete={this.removeContact}></ContactList>
    </AppCSS>
  )}
}

export default App;
