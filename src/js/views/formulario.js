import React from "react";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';




export const Formulario = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Formulario enviado");

    };





    return (
        <div className="d-flex justify-content-center">
         
            <div className="w-50 p-4 border rounded shadow">
            <h4>Add a new contact</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="inputName"  placeholder="Full Name" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="inputPhone" placeholder="Enter phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="number" className="form-control" id="inputAddress" placeholder="Enter address" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 "><i class="fa-solid fa-user-plus me-3"></i>Save</button>
                
                    <Link  className="btn btn-link p-0 me-3">
                       <p> Or get back to contacts</p>
                    </Link>
                </form>



            </div>


        </div>



    );
};