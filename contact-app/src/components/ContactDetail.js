import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import profile_pic from '../images/profile_pic.png'
import api from '../api/contacts'

const ContactDetail = (props) =>
{
    const [contactData, setContactData] = useState();

    const { id } = useParams();

    useEffect(() =>
    {
        const getContact = async () =>
        {
            const response = await api.get(`/contacts/${id}`);
            if (response.data)
                setContactData(response.data);
        }
        getContact();
    }, [])


    return (
        <div>
            <div className="card text-center" style={{ width: "18rem" }}>
                <img className="card-img-top" src={profile_pic} alt="Card image cap" style={{ width: '115px', height: '115px' }} />
                <div className="card-body">
                    <h5 className="card-title">{contactData && contactData.name}</h5>
                    <p className="card-text">{contactData && contactData.email}</p>
                    <Link to={'/'}>
                        <button className='btn btn-primary'>Back to list</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail;