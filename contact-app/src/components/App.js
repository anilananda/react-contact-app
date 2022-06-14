import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import api from '../api/contacts'
import EditContact from './EditContact';


/* eslint-disable */
function App()
{
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  //Retrive contact data
  const retriveContacts = async () =>
  {
    const response = await api.get("/contacts");
    return response.data;
  }


  const addContactHandler = async (contact) =>
  {
    const response = await api.post("/contacts", contact);

    setContacts([...contacts, response.data])
  }
  const editContactHandler = async (contact) =>
  {
    const response = await api.put(`/contacts/${contact.id}`, contact)

    const { id } = contact;

    setContacts(
      contacts.map((contact) =>
      {
        return contact.id === id ? { ...response.data } : contact
      })
    )
  }

  useEffect(() =>
  {
    const getContacts = async () =>
    {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    }

    getContacts();
  }, [])

  useEffect(() =>
  {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) =>
  {

    api.delete(`/contacts/${id}`)

    const newContacts = contacts.filter((contact) =>
    {
      return contact.id !== id;
    });

    setContacts(newContacts);
  }

  return (
    <div className=''>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' element={<ContactDetail contact={contacts} />} />
          <Route path='/edit/:id' element={<EditContact editContactHandler={editContactHandler} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
