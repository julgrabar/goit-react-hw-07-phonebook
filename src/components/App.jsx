import { ContactForm } from './Contact form/ContactForm';
import { ContactList } from './Contact list/ContactList';
import { Filter } from './Filter/Filter';
import { Global } from './Global';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  addContactRequest,
  fetchContactsNames,
} from 'redux/contactsOperations';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsNames());
  }, [dispatch]);

  const addNewContact = ({ name, number }) => {
    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      alert(`${name} is Already in contacts`);
      return;
    }

    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest(contact));
  };

  const findPhones = () => {
    const normalizedValue = filterValue.toLowerCase();
    const filteredArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
    return filteredArray;
  };

  return (
    <div>
      <Global />

      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />

      <h2>Contacts</h2>

      {!isLoading && (
        <>
          <Filter />
          <ContactList contacts={findPhones()} />
        </>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
