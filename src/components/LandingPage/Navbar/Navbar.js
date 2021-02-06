import React, {useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import {FaBars} from 'react-icons/fa';
import './Navbar.css';
import { ServiceContext, UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedService, setSelectedService] = useContext(ServiceContext)
    const history = useHistory();
    const handleLoginBtn = () => {
        if (loggedInUser.email) {
            setLoggedInUser({})
            setSelectedService({})
            localStorage.removeItem('token')
        }else{
            history.push('/login')
        }
    }
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <img src={logo} className="nav-brand" alt=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'>
                            <FaBars/>
                        </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='Our-portfolio' className="nav-link">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/our-team' className="nav-link">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <button onClick={handleLoginBtn} className="nav-link btn-brand px-4 text-white">{loggedInUser.email ? `${loggedInUser.name}/LogOut` : "Login"}</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;