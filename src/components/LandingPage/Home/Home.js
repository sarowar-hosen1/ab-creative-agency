import React from 'react';
import HomeMain from '../HomeMain/HomeMain';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
                <Navbar />
                <HomeMain />
        </div>
    );
};

export default Home;