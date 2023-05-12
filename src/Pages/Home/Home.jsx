import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className='p-16 my-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServicesCard key={service.service_id} service={service}></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default Home;