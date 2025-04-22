import React from "react";
import { Link } from 'react-router-dom';
import { useContext, useEffect  } from 'react';
import { Context } from '../store/appContext';
import personaImage from "../../img/persona.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [selectedContactId, setSelectedContactId] = useState(null);

useEffect(() => {
	actions.GetContacts();
}, []);
const handleDelete = () => {
	actions.DeleteContact(selectedContactId); // Llama a la acción para eliminar el contacto
	setSelectedContactId(null); // Limpia el estado después de eliminar
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
							data-bs-toggle="modal"
							data-bs-target="#deleteModal"
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

		{/* Modal */}
		<div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						<button type="button" className="close btn-secondary" data-dismiss="modal" aria-label="Close">
							<i className="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div className="modal-body">
						<p>If you delete this thing the entire universe will go down!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">OH NO!</button>
						<button type="button" className="btn btn-secondary" onClick={handleDelete} data-dismiss="modal">Yes baby!</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
};