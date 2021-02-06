import React, { useContext, useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-cliffs-56047.herokuapp.com/service-list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])


    return (
        <div className='row service-list-container m-0'>
            <div className="col-md-2 col-sm-12 col-12">
                <Sidebar />
            </div>
            <div style={{ backgroundColor: '#dadada' }} className="col-md-10 col-sm-12 col-12 p-0">
                <div className="d-flex justify-content-between bg-white pt-4 px-4">
                    <h5>Service list</h5>
                    <div>
                        <img style={{ width: '40px', borderRadius: '50%', marginBottom: '10px' }} src={loggedInUser.photo} alt="User image" />
                        <span className="font-weight-bold ml-2">{loggedInUser.name}</span>
                    </div>
                </div>
                <div className="service-list">
                    {
                        serviceList.length === 0 ?
                        <div className="w-100 d-flex justify-content-center">
                            <ScaleLoader/>
                        </div>
                        :
                            <table className='table table-responsive table-borderless table-striped bg-white'>
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">SL</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Product Details</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        serviceList.map((service, index) =>
                                            <tr>
                                                <td className='font-weight-bold'>{index + 1}</td>
                                                <td>{service.name}</td>
                                                <td>{service.email}</td>
                                                <td>{service.service}</td>
                                                <td style={{ width: '35%' }}>{service.product_details.slice(0, 80)}</td>
                                                <td>Pending</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;