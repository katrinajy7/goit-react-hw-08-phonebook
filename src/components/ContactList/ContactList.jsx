import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';


export const ContactList = ({ contacts, deleteContact}) => {
    return (
        <ul className={css.ulBox}>
            {contacts.map(contact => (
                <ContactListItem
                key={contact.id}
                filteredContact={contact}
                deleteContact={deleteContact} 
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    delelteContact: PropTypes.func.isRequired,
};