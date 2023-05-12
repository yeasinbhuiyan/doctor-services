import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import DoctorServiceBook from "../Pages/doctorServiceBook/doctorServiceBook";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><DoctorServiceBook></DoctorServiceBook></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)


            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default router;