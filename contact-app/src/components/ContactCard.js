import React from "react";
import profile_pic from "../images/profile_pic.png"
import { useNavigate } from "react-router-dom";

const ContactCard = (props) =>
{
    const navigate = useNavigate();
    const { id, name, email } = props.contacts;

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">

            <img src={profile_pic} style={{ width: '35px', height: '35px', marginTop: '7px' }} />

            <div className="ms-2 me-auto" onClick={() => { navigate(`/contact/${id}`) }}>
                <div className="fw-bold">{name}</div>
                <span style={{ color: 'blue' }}>{email}</span>
            </div>

            <i style={{ color: 'blue', marginTop: '15px', cursor: 'pointer', marginRight: '15px' }}
                onClick={() => { navigate(`/edit/${id}`) }}
                className="bi bi-pencil-square" title="Edit">
            </i>

            <i style={{ color: 'red', marginTop: '15px', cursor: 'pointer' }} className="bi bi-x-circle-fill" title="Delete"
                onClick={() => props.clickHandler(id)}>
            </i>

        </li >

    )
}

export default ContactCard;