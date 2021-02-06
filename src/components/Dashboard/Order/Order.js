import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import './Order.css'
import { ServiceContext, UserContext } from '../../../App';
import { FaWindows } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Order = () => {
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedService, setSelectedService] = useContext(ServiceContext)
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {

        fetch('https://peaceful-cliffs-56047.herokuapp.com/add-order', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                alert('Order added successfully');
                window.location.reload()
            }
        })
    };
    return (
        <div className='row order-container m-0'>
            <div className="col-md-2 col-sm-4 col-4">
                <Sidebar />
            </div>
            <div style={{ backgroundColor: '#dadada' }} className="col-md-10 col-sm-8 col-8 p-0">
                <div className='d-flex justify-content-between align-items-center bg-white pt-4 px-4'>
                    <h5>Order</h5>
                    <div>
                        <img style={{ width: '40px', borderRadius: '50%', marginBottom: '10px' }} src={loggedInUser.photo} alt="User image" />
                        <span className="font-weight-bold ml-2">{loggedInUser.name}</span>
                    </div>
                </div>
                <div className="order-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" className='form-control' defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Name or Company Name" />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="email" type="email" className='form-control' defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Email address" />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="service" className='form-control' defaultValue={selectedService.name} ref={register({ required: true })} placeholder="Service" />
                            {errors.service && <span>Service is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea style={{ resize: 'none' }} name="product_details" className='form-control' id="" cols="30" rows="3" ref={register({ required: true })} placeholder='Product details'></textarea>
                            {errors.product_details && <span>Product is required</span>}
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <input name="price" className='form-control w-50' ref={register({ required: true })} placeholder="Price" />
                            {errors.price && <span>Price required</span>}
                            <input type="file" id='file' name='image' className='form-control d-none' />
                            <label htmlFor="file"><i><AiOutlineCloudUpload /></i> Upload project file</label>
                        </div>
                        <input className='btn-brand px-5' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;