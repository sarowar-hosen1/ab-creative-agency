import React from 'react';
import './Clients.css';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import airbnb from '../../../images/logos/airbnb.png';
import uber from '../../../images/logos/uber.png';
import spotify from '../../../images/logos/spotify.png';

const Clients = () => {
    return (
        <section className='clients-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-2 col-4">
                        <div className="client">
                            <img className="img-fluid" src={slack} />
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-4">
                        <div className="client">
                            <img className="img-fluid" src={google} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-4">
                        <div className="client">
                            <img className="img-fluid" src={uber} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-4">
                        <div className="client">
                            <img className="img-fluid" src={netflix} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-4">
                        <div className="client">
                            <img className="img-fluid" src={spotify} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-2 col-4">
                        <div className="client">
                            <img className="img-fluid" src={airbnb} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;