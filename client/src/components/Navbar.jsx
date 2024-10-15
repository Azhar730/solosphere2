import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import logo from '/images/logo.png'
import toast from "react-hot-toast"
import axios from "axios"

const Navbar = () => {
    const { user, logOut } = useAuth()
    const handleLogout = async () => {
        try {
            await logOut()
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
            if (data.success) {
                toast.success('Logout Successful')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to={'/'} className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>SoloSphere</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal items-center px-1'>
                    {!user && <li>
                        <Link to={'/login'}>Login</Link>
                    </li>}
                </ul>

                {user && <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div className='w-10 rounded-full' title={user?.displayName}>
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                        <li>
                            <Link to={'/add-job'} className='justify-between'>Add Job</Link>
                        </li>
                        <li>
                            <Link to={'/my-posted-jobs'}>My Posted Jobs</Link>
                        </li>
                        <li>
                            <Link to={'/my-bids'}>My Bids</Link>
                        </li>
                        <li>
                            <Link to={'/bid-requests'}>Bid Requests</Link>
                        </li>
                        <li className='mt-2'>
                            <button onClick={handleLogout} className='bg-gray-200 block text-center'>Logout</button>
                        </li>
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default Navbar