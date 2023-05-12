import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {  service_name, service_price, image_url, _id } = service
    return (
        <div className="card w-96 glass">
            <figure><img src={image_url} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{service_name}</h2>
                <p className='text-bold text-cyan-500'>Price: $ {service_price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/book/${_id}`}><button className="btn border-cyan-200 hover:border-cyan-200 hover:bg-cyan-600 bg-cyan-400">Book now!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;