import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DoctorServiceBook = () => {

    const { user } = useContext(AuthContext)
    const serviceBookDetails = useLoaderData()
    console.log(serviceBookDetails)

    const { service_name, service_price, img } = serviceBookDetails

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const date = form.date.value 

        const serviceDetails={
            service_name,
            name,
            img,
            service_price,
            date 
        }

    }


    return (

        <>
            <div className="my-10">
                <h1 className="text-3xl  font-semibold text-center text-cyan-600">Booking Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="px-16 my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  type="text" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user?.email} type="text" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input defaultValue={service_price} type="text" name="price" className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control px-16  mt-2">
                        <input className="btn border-cyan-200 hover:border-cyan-200 hover:bg-cyan-600 bg-cyan-400" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </>

    );
};

export default DoctorServiceBook;