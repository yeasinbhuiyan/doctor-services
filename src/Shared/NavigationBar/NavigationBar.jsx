
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)


    const navigationLink =
        <>

            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            {user ? <>
                {/* <li><Link to='/bookingsTable'>Bookings</Link></li> */}
                <li>   <button onClick={logOut}>Log out</button></li>
            </> :

                <li><Link to='/login'>Login</Link></li>
            }


        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                        {navigationLink}

                    </ul>
                </div>
                <Link to='/'><h1 className='text-secondary font-semibold text-sm'>Doctors Point</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-5 font-semibold menu-horizontal px-1">
                    {navigationLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavigationBar;