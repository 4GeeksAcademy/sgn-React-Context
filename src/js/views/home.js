import React from "react";
import { Link } from 'react-router-dom';
import { useContext, useEffect,useState  } from 'react';
import { Context } from '../store/appContext';
import personaImage from "../../img/persona.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);


useEffect(() => {
	actions.GetContacts();
}, []);
const handleDelete = (contacto) => {
	actions.deleteContact(contacto); // Llama a la acción para eliminar el contacto
	
};

return (
	<div className="container">
		{store.listContacts.length === 0 ? (
			<p>No hay contactos todavía.</p>
		) : (
			store.listContacts.map(contact => (
				<div key={contact.id} className="user-card d-flex my-3 p-3 border rounded">
					<div className="col-md-3 d-flex justify-content-center">
						<img src={personaImage} alt="user" className="rounded-circle" />
					</div>

					<div className="col-md-6 d-flex flex-column align-items-start">
						<h5 className="name">{contact.name}</h5>
						<p className="adress"><i className="fa-solid fa-location-dot me-3"></i>{contact.address}</p>
						<p className="phone"><i className="fa-solid fa-phone me-3"></i>{contact.phone}</p>
						<p className="email"><i className="fa-solid fa-envelope me-3"></i>{contact.email}</p>
					</div>

					<div className="col-md-3 d-flex justify-content-end align-items-start">
						<button
							type="button"
							className="btn btn-link"
							onClick={()=> handleDelete (contact.id)}
						>
							<i className="fa-solid fa-trash"></i>
						</button>

						<Link to={`/formulario/${contact.id}`} className="btn btn-link">
							<i className="fa-solid fa-pen"></i>
						</Link>
					</div>
				</div>
			))
		)}

		
	</div>
);
};