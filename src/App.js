import React from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchField from "./components/SearchField/SearchField";
import ContactList from "./components/ContactList/ContactList";

import { AppCSS, Caption, SubTitle } from "./styledApp";

import "./App.css";
import { connect } from "react-redux";

const App = ({ state }) => {
  console.log(state);
  return (
    <AppCSS>
      <Caption>Phonebook</Caption>
      <ContactForm contacts={state.contacts}></ContactForm>
      <SubTitle>Contacts</SubTitle>
      <SearchField></SearchField>
      <ContactList></ContactList>
    </AppCSS>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(App);
