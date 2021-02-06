import React from 'react';
import Clients from './Clients/Clients';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import ContactUs from './ContactUs/ContactUs';
import Home from './Home/Home';
import Services from './Services/Services';
import Works from './Works/Works';

const LandingPage = () => {
    return (
        <>
            <Home/>
            <Clients/>
            <Services/>
            <Works/>
            <ClientsFeedback/>
            <ContactUs/>
        </>
    );
};

export default LandingPage;