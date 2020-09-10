import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ItemCSS } from './styledContactItem';

class ContactItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired // function removeContact from App
  }

  removeContact = () => {
    const { onClick } = this.props;
    const contactIDToRemove = this.props.id;
    onClick(contactIDToRemove);
  }
  
  render () {
    const { name, number } = this.props;
    return (
      <ItemCSS>{name}: {number}
      <button onClick={this.removeContact}>Delete</button>
      </ItemCSS>
    );
  }
}

export {ContactItem};