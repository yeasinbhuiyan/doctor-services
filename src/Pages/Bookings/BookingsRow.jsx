/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-const-assign */
import React from 'react';

const BookingsRow = ({ booking, handleDelete, handlePaid }) => {
    const { service_name, image_url, service_price, date, _id, status } = booking


    return (

        <>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-24 h-24">
                                <img src={image_url} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {service_name}
                </td>
                <td>
                    {date}
                </td>
                <td>
                    {service_price}
                </td>
                <th>
                    {
                        status === 'confirm' ? <span className='text-xl font-bold text-cyan-400'>Paid</span> :
                            <button onClick={() => handlePaid(_id)} className="btn btn-ghost btn-xs">Pay?</button>
                    }




                </th>
            </tr>

        </>
    );
};

export default BookingsRow;