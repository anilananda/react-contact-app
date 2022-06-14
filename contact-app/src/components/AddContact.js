import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const INITIAL_STATE = {
    name: "",
    email: ""
}
const AddContact = ({ addContactHandler }) =>
{
    const navigate = useNavigate();
    const [contact, setContact] = useState(INITIAL_STATE)
    const handleChange = (payload) =>
    {
        if (payload)
        {
            setContact({ ...contact, ...payload })
        }
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (contact.name === "" || contact.email === "")
        {
            alert('All the fields are required!')
            return
        }

        addContactHandler({
            ...contact,
            id: Date.parse(new Date().toString())
        });

        setContact(INITIAL_STATE)
        navigate('/');
    }

    return (<div div className='container' >
        <h5 className='display-5'>Add Contact</h5>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"
                    onChange={({ target: { value } }) => handleChange({ name: value })}
                    value={contact.name} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"
                    onChange={({ target: { value } }) => handleChange({ email: value })}
                    value={contact.email}
                />
            </div>

            <div className='center'>
                <button className='btn btn-primary'>Add</button>
                <button className='btn btn-danger' style={{ marginLeft: '15px' }} onClick={() => { navigate(`/`) }}>Back to list</button>
            </div>


        </form>

    </div >)
}


export default AddContact;