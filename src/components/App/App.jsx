import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { addContact, deleteContact, selectContacts } from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './App.module.css';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const handleAddContact = (name, number) => {
        dispatch(addContact(name, number));
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={css.mainContainer}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onAdd={handleAddContact} />
            <SearchBox filter={filter} onFilterChange={handleFilterChange} />
            <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
        </div>
    );
};

export default App;
