
import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import personaImage from "../../img/persona.jpg";

export const Directorio = ({ }) => {
    const { store, actions } = useContext(Context);
    // const eliminarContacto = () => {
    //     console.log(contact)
    //     actions.deleteContact(contact.id);
    // };

    return (
        <div className="d-flex justify-content-center">
            <div className="user-card d-flex">

                <div className="col-md-3 d-flex justify-content-center">
                    <img src={personaImage} alt="user" className="rounded-circle" />
                </div>


               
                 

                        <div className="col-md-6 d-flex flex-column align-items-start">
                            <h5 className="name">Sophia Page</h5>
                            <p className="adress"><i class="fa-solid fa-location-dot me-3"></i>ADRESS</p>
                            <p className="phone"><i class="fa-solid fa-phone me-3"></i>PHONE</p>
                            <p className="phone"><i class="fa-solid fa-envelope me-3"></i>EMAIL</p>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end align-items-start">
                            <button className="btn btn-link pull-right">

                                <i class="fa-solid fa-trash"></i></button>
                                <button className="btn btn-link pull-right"><i class="fa-solid fa-pen"></i></button>
                        </div>
                       
                    
                


            </div>
        </div>

    );
};



