import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingsRow from './BookingsRow';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings)


    const handleDelete = (id) => {

        fetch(`http://localhost:5000/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const WithOutdeleted = bookings.filter(bf => bf._id !== id)
                setBookings(WithOutdeleted)
                console.log(data)
                alert('Your Bookmark service Deleted')
            })
    }


    const handlePaid = (id) => {

        fetch(`http://localhost:5000/paid/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {

                const updatedStatus = bookings.find(bf => bf._id === id)
                const withOutStatus = bookings.filter(bf => bf._id !== id)
                updatedStatus.status = 'confirm'
                setBookings([updatedStatus, ...withOutStatus])
                alert('Succesfully paid Our service')
                console.log(data)
            })

    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingsRow key={booking._id} handlePaid={handlePaid} handleDelete={handleDelete} booking={booking}></BookingsRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Bookings;