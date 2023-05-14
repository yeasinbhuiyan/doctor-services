import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingsRow from './BookingsRow';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`, {
            method: 'GET',
            headers: {
                author: `bearer ${localStorage.getItem('access-token')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [])
    console.log(bookings)


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/remove/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )

                        const WithOutdeleted = bookings.filter(bf => bf._id !== id)
                        setBookings(WithOutdeleted)
                        console.log(data)

                    })



            }
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
                Swal.fire(
                    'Waiting For Our Service!',
                    'Succesfully paid Our service',
                    'success'
                )

                const updatedStatus = bookings.find(bf => bf._id === id)
                const withOutStatus = bookings.filter(bf => bf._id !== id)
                updatedStatus.status = 'confirm'
                setBookings([updatedStatus, ...withOutStatus])

                console.log(data)
            })

    }
    return (
        <div>
            <div className="overflow-x-auto w-full grid grid-cols-1 ">
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