import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUsForm.css';

const ContactUsForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="contact-us-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="email" type="email" className="form-control" ref={register({ required: true })} placeholder="Email address" />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div className="form-group">
                    <input name="name" type="text" className="form-control" ref={register({ required: true })} placeholder="Name or company name" />
                    {errors.name && <span>Name or company is required</span>}
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" cols="30" rows="6" className="form-control" ref={register({ required: true })} placeholder="Message"></textarea>
                    {errors.message && <span>This field is required</span>}
                </div>
                <input className="btn-brand py-2 px-5" type="submit" />
            </form>
        </div>
    );
};

export default ContactUsForm;