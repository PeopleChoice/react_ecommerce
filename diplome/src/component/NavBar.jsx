import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const state = useSelector((state)=>state.handlePanier);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">CHEIKH STORE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="Home">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/produits">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                           
                        </ul>
                        <div className="buttons">
                                 <NavLink to="/login" className="btn btn-outline-dark">
                                     <i className='fa fa-sign-in me-1'></i> Login
                                  </NavLink>
                                  <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                     <i className='fa fa-user-plus me-1'></i> Register
                                  </NavLink>
                                  <NavLink to="/panier" className="btn btn-outline-dark ms-2">
                                     <i className='fa fa-shopping-cart me-1'></i> Panier ({state.length})
                                  </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default NavBar;