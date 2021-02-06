import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './AddService.css';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const file = data.file[0];
        console.log(file);
        const formData = new FormData();
        formData.append('file', file)
        formData.append('title', data.title)
        formData.append('description', data.description)
        fetch('https://peaceful-cliffs-56047.herokuapp.com/add-service', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                alert("Service addedd successfully")
                window.location.reload();
            }
        })
    };

    return (
        <div className='row add-service-container m-0'>
            <div className="col-md-2 col-sm-4 col-4">
                <Sidebar />
            </div>
            <div style={{backgroundColor:'#dadada'}} className="col-md-10 col-sm-8 col-8 p-0">
                <div className="d-flex justify-content-between bg-white px-4 pt-4">
                    <h5>Add service</h5>
                    <div>
                        <img style={{ width: '40px', borderRadius: '50%', marginBottom: '10px' }} src={loggedInUser.photo} alt="User image" />
                        <span className="font-weight-bold ml-2">{loggedInUser.name}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className="font-weight-bold ml-2" htmlFor="">Service Title</label>
                        <input name="title" className="form-control" ref={register({ required: true })} placeholder="Enter title" />
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold ml-2" htmlFor="">Description</label>
                        <textarea style={{ resize: 'none' }} name="description" className="form-control" cols="30" rows="5" ref={register({ required: true })} placeholder="Enter description"></textarea>
                        {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold ml-2" htmlFor="">Icon</label><br/>
                        <input className="d-none" type="file" id="service-file" name="file" ref={register({ required: true})}/>
                        <label id='add-service-file' htmlFor="service-file"><i><AiOutlineCloudUpload/></i>  Upload image</label>
                    </div>
                    <input className="btn-brand px-5" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;