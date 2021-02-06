import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { FaCartPlus, FaDribbble, FaOpenid, FaPlus, FaUserLock } from "react-icons/fa";
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [active, setActive] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    const history = useHistory()

    const handleActive = () => {
        setActive(!active);
    }
    console.log(active);

    useEffect(() => {
        fetch(`https://peaceful-cliffs-56047.herokuapp.com/isAdmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(result => {
                setAdmin(result)
            })
    }, [])

    return (
        <div className='sidebar'>
            <img onClick={() => history.push('/')} src={logo} className='img-fluid' alt="" />
            <ul>


                {
                    admin &&
                    <>
                        <li>
                            <i><FaDribbble /></i>
                            <NavLink activeClassName="nav-active" to='/dashboard/service'>Service list</NavLink>
                        </li>
                        <li>
                            <i><FaPlus /></i>
                            <NavLink activeClassName="nav-active" to='/dashboard/add-service'>Add service</NavLink>
                        </li>
                        <li>
                            <i><FaUserLock /></i>
                            <NavLink activeClassName="nav-active" to='/dashboard/make-admin'>Make admin</NavLink>
                        </li>
                    </>
                }

                {
                    !admin &&
                    <>
                        <li>
                            <i><FaCartPlus /></i>
                            <NavLink activeClassName="nav-active"  to='/dashboard/order'>Order</NavLink>
                        </li>
                        <li>
                            <i><FaDribbble /></i>
                            <NavLink activeClassName="nav-active"  to='/dashboard/service'>Service list</NavLink>
                        </li>
                        <li>
                            <i><FaOpenid /></i>
                            <NavLink activeClassName="nav-active"  to='/dashboard/review'>Review</NavLink>
                        </li>
                    </>
                }
            </ul>
        </div>
    );
};

export default Sidebar;