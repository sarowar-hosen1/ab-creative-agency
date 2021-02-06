import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import './ContactUs.css';

const ContactUs = () => {
    
    useEffect(() => {
        AOS.init({duration:2000})
    },[])

    return (
        <section id="contact" className="contact-us-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className='contact-content'>
                            <h2 data-aos='slide-right'>Let us handle your <br/>project, professionally</h2>
                            <p data-aos='fade' data-aos-duration='4000'>With well written codes we build amazing website for all platform, Mobile and web app general</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                            <ContactUsForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;