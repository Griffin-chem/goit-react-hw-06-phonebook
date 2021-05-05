import React from "react";
import types from "../../reducer/types";

import { ListCSS } from "./styledContactList";
import { connect } from "react-redux";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ListCSS>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => removeContact(id)}>Delete</button>
        </li>
      ))}
    </ListCSS>
  );
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
}

const mapStateToProps = ({contacts}) => ({
  contacts: getFilteredContacts(contacts.items, contacts.filter)
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => {
    dispatch({
      type: types.removeContact,
      value: id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
