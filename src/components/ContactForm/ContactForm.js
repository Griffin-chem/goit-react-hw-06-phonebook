import React, { useState } from "react";
import { connect } from "react-redux";
import types from "../../reducer/types";
import { v4 as uuidv4 } from "uuid";

import {
  FormCSS,
  LabelCSS,
  TextInputCSS,
  SubmitCSS,
} from "./styledContactForm";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <FormCSS
      onSubmit={(e) => {
        e.preventDefault();
        addContact(name, number);
      }}
    >
      <LabelCSS htmlFor="name_input">Name</LabelCSS>
      <TextInputCSS
        id="name_input"
        name="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        placeholder="Input name..."
      ></TextInputCSS>
      <LabelCSS htmlFor="number_input">Phone</LabelCSS>
      <TextInputCSS
        id="number_input"
        name="number"
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        placeholder="Input number..."
      ></TextInputCSS>
      <SubmitCSS type="submit" value="Add contact"></SubmitCSS>
    </FormCSS>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const newContact = (name, number) => {
  return { id: uuidv4(), name, number };
};

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) => {
    dispatch({
      type: types.addContact,
      value: newContact(name, number),
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
