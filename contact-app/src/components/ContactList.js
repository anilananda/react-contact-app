import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom'

const ContactList = (props) =>
{
    const deleteContactHandler = (id) =>
    {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contacts) =>
    {
        return (<ContactCard contacts={contacts} key={contacts.id} clickHandler={deleteContactHandler} />)
    });

    return (
        <div className='container'>
            <div>
                <h5 className='display-5'>Contact List</h5>
                <Link to='/add'>
                    <button className='btn btn-primary'>Add Contact</button>
                </Link>
            </div>
            <br />
            <ol className="list-group">
                {renderContactList}
            </ol>
        </div >
    )
}

export default ContactList;