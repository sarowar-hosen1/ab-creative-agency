import React, { useContext, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './MakeAdmin.css';
import { DialogContent, DialogTitle } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const MakeAdmin = () => {
    
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        fetch('https://peaceful-cliffs-56047.herokuapp.com/make-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(admin => {
                if (admin) {
                    alert('Admin added successfully')
                    window.location.reload()
                }
            })
    };

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    

    return (
        <div className="row make-admin-container m-0">
            <div className="col-md-2 col-sm-4 col-4">
                <Sidebar />
            </div>
            <div style={{ backgroundColor: '#dadada' }} className="col-md-10 col-sm-8 col-8 p-0">
                <div className="d-flex justify-content-between bg-white pt-4 px-4">
                    <h5>Make admin</h5>
                    <div>
                        <img style={{ width: '40px', borderRadius: '50%', marginBottom: '10px' }} src={loggedInUser.photo} alt="User image" />
                        <span className="font-weight-bold ml-2">{loggedInUser.name}</span>
                    </div>
                </div>
                <div className="make-admin-form">
                    <button onClick={handleClickOpen} className='btn-brand px-5'>Make admin</button>
                    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
                        <DialogTitle>Make Admin</DialogTitle>
                        <DialogContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="">Email address</label>
                                    <input name="email" className='form-control' ref={register({ required: true })} placeholder="Email" />
                                    {errors.email && <span>Email is required</span>}
                                </div>
                                <input className='btn-brand px-5' type="submit" />
                            </form>
                            <button style={{background: 'none', border: 'none'}} className='float-right' onClick={handleClose}>Close</button>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;