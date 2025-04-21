import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import personaImage from "../../img/persona.jpg";
import "../../styles/home.css";

export const Home = () => {
const { store, actions } = useContext(Context);


// const eliminarContacto = () => {
// 	console.log(contact)
// 	actions.deleteContact(contact.id);
// };

return (
	<div className="d-flex justify-content-center">
		<div className="user-card d-flex">

			<div className="col-md-3 d-flex justify-content-center">
				<img src={personaImage} alt="user" className="rounded-circle" />
			</div>





			<div className="col-md-6 d-flex flex-column align-items-start">
				<h5 className="name">pedro</h5>
				<p className="adress"><i class="fa-solid fa-location-dot me-3"></i>direccion</p>
				<p className="phone"><i class="fa-solid fa-phone me-3"></i>5555</p>
				<p className="email"><i class="fa-solid fa-envelope me-3"></i>55555</p>
			</div>
			<div className="col-md-3 d-flex justify-content-end align-items-start">
				<button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#deleteModal">

					<i className="fa-solid fa-trash"></i>
				</button>




				<Link to="" className="btn btn-link">
					<i className="fa-solid fa-pen"></i>
				</Link>
			</div>
		</div>


		{/* modal */}
		<div className="modal fade"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" id="deleteModal">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						<button type="button" className="close btn-secondary" data-dismiss="modal" aria-label="Close">
						<i className="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div className="modal-body">
						<p>If you delete this thing the etire universe will go down!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">OH NO!</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal" >Yes baby!</button>
					</div>
				</div>
			</div>
		</div>

	</div>


);

}