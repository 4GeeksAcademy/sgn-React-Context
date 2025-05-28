import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Formulario = () => {
const { store, actions } = useContext(Context)
let navigate = useNavigate();
const { id } = useParams();


const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");

function agregarContacto(e) {
    e.preventDefault();
    if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
        alert("the fields cannot be empty")
        return null
    }
    const newContact = {
        name,
        phone,
        email,
        address,
    };
    if (!id) {
        actions.createContact(newContact);
    } else {
        actions.editContact(id, newContact);
    }


    alert("Contacto guardado");
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
}

useEffect(() => {
    if (id && store.listContacts.length > 0) {
        const currentContact = store.listContacts.find(contact => contact.id == id)
        if (currentContact) {
            setName(currentContact.name)
            setPhone(currentContact.phone)
            setEmail(currentContact.email)
            setAddress(currentContact.address)
        }
    }
}, [id, store.listContacts])


return (
    <div className="d-flex justify-content-center">

        <div className="w-50 p-4 border rounded shadow">
        <h1 className="text-center">{!id ? "Add a New Contact" : `Editing Contact: ${name}`}</h1>
            <form onSubmit={agregarContacto}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="inputPhone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100 "><i className="fa-solid fa-user-plus me-3"></i>Save</button>
            </form>
            <Link to="/" className="btn btn-link p-0 me-3">
                    <p> Or get back to contacts</p>
                </Link>
        </div>

    </div>



);
};
export default Formulario;