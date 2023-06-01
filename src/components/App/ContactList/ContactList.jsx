import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, ListItem, BtnDelite } from './ContactList.styled';

class ContactList extends Component {
  handleDeleteContact = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <BtnDelite onClick={() => this.handleDeleteContact(contact.id)}>
              Видалити
            </BtnDelite>
          </ListItem>
        ))}
      </List>
    );
  }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactList;