import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-mainbg">
                <NavLink className="navbar-brand navbar-logo title_name" to="/" exact>
                    Hostel Management System
                    {/* <i class="fab fa-angellist"></i> */}
                    
                </NavLink>
                <i class="fas fa-cannabis"></i>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/About" exact>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/MyGallery" exact>
                                Gallery
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/Contact" exact>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/Login" exact>
                                    Log In
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            
            
        </>
    )
}

export default Navbar
