import React, { Component } from "react";
import PropTypes from "prop-types";

import { ContactItem } from "../ContactItem/ContactItem";

import { ListCSS } from "./styledContactList";

class ContactList extends Component {
  static propTypes = {
    // function contactsToShow() from App
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    // function removeContact from App
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ListCSS>
        {contacts.map(({ id, ...props }) => (
          <ContactItem key={id} onDelete={() => onDelete(id)} {...props} />
        ))}
      </ListCSS>
    );
  }
}

export { ContactList };
