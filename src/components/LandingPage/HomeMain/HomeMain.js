import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import frame from '../../../images/logos/Frame.png';
import './HomeMain.css';
import { useHistory } from 'react-router-dom';

const HomeMain = () => {
    const history = useHistory()
    useEffect(() =>{
        AOS.init({
            duration:3000
        });
    },[])

    return (
        <div className="home-main-container">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 mb-4" data-aos="fade">
                        <div className="home-main-content">
                            <h1>Let's Grow Your <br />Brand To The <br />Next Level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis provident repudiandae ratione perspiciatis non ad ipsam dolore, perferendis est ipsa quae neque veritatis laudantium ducimus. Id ea delectus facere quis asperiores, eligendi fuga modi.</p>
                            <button onClick={() => history.push('/dashboard')} className='btn-brand'>Hire Us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="home-main-img" data-aos="slide-left">
                            <img src={frame} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;