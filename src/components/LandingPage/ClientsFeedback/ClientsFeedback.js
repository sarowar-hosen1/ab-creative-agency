import React, { useEffect, useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import AOS from 'aos'
import 'aos/dist/aos.css';
import './ClientsFeedback.css';

const ClientsFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-cliffs-56047.herokuapp.com/get-review')
            .then(res => res.json())
            .then(feedback => setFeedbacks(feedback))
    })

    useEffect(() => {
        AOS.init({ duration: 4000 })
    }, [])
    return (
        <section className='client-feedback-container'>
            <h2 className='text-brand'>Clients <span>Feedback</span></h2>
            <div className="container">
                <div className="row">
                    {
                        feedbacks.length === 0 ?
                            <div className="w-100 d-flex justify-content-center">
                                <ScaleLoader color={"#5A903A"} />
                            </div>
                            :
                            feedbacks.map(feedback =>
                                <div className='col-md-4'>
                                    <div className="feddback" data-aos='zoom-in'>
                                        <div className="d-flex align-items-center">
                                            <img style={{ borderRadius: '50%' }} src={feedback.img} alt="" />
                                            <div>
                                                <h5>{feedback.name}</h5>
                                                <h6 className="text-muted">{feedback.title}</h6>
                                            </div>
                                        </div>
                                        <p>{feedback.description.slice(0, 120)}</p>
                                    </div>
                                </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;