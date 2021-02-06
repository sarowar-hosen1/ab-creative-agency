import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import './AddReview.css';
import { UserContext } from '../../../App';
import { useLocation } from 'react-router-dom';

const AddReview = () => {
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const src = loggedInUser.photo;
        fetch('https://peaceful-cliffs-56047.herokuapp.com/add-review', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({...data, img:src})
        })
        .then(res => res.json())
        .then(review => {
            if (review) {
                alert("Review successfully")
                window.location.reload()
            }
        })
    };

    return (
        <div className='row add-review-container m-0'>
            <div className="col-md-2 col-sm-4 col-4">
                <Sidebar />
            </div>
            <div style={{backgroundColor:'#dadada'}} className="col-md-10 col-sm-8 col-8 p-0">
                <div className="d-flex justify-content-between bg-white pt-4 px-4">
                    <h5>Review</h5>
                    <div>
                        <img style={{ width: '40px', borderRadius: '50%', marginBottom: '10px' }} src={loggedInUser.photo} alt="User image" />
                        <span className="font-weight-bold ml-2">{loggedInUser.name}</span>
                    </div>
                </div>
                <div className="review-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" className='form-control' defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Name" />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="title" className='form-control' ref={register({ required: true })} placeholder="Company name, Designation" />
                            {errors.title && <span>Company name is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea style={{resize:'none'}} name="description" className='form-control' cols="30" rows="5" ref={register({ required: true })} placeholder="Description" ></textarea>
                            {errors.description && <span>Description is required</span>}
                        </div>

                        <input className='btn-brand px-5' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;