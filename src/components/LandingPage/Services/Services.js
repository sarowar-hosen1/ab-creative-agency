import React, { useContext, useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import { useHistory } from 'react-router-dom';
import { ServiceContext } from '../../../App';

const Services = () => {

    const history = useHistory()
    const [selectedService, setSelectedService] = useContext(ServiceContext)
    const [services, setServices] = useState([]);
    const sliceServices = services.slice(0,6);
    useEffect(() => {
        fetch('https://peaceful-cliffs-56047.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className="services-container">
            <h2 className="section-title text-brand">Provide Awesome <span>Services</span></h2>
            <div className="container">
                <div className="row">
                    {
                        services.length === 0 ?
                            <div className="w-100 d-flex justify-content-center">
                                <ScaleLoader color={'#5A903A'}/>
                            </div>
                            :
                            sliceServices.map(service =>
                                <div className="col-md-4">
                                    <div onClick={() => {
                                        setSelectedService(service);
                                        history.push('/dashboard/order')
                                    }} className="card text-center" data-aos="zoom-in">
                                        <img src={`data:image/jpeg;base64,${service.image.img}`} />
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;