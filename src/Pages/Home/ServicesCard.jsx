import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, service_name, service_price, image_url } = service
    return (
        <div className="card w-96 glass">
            <figure><img src={image_url} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-bold text-cyan-500'>{service_price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book now!</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;