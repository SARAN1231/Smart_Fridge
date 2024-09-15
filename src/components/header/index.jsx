import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()

    return (
        <div className="container mx-auto py-6 px-4">
            <header className="border-b pb-4 mb-8">
                <div className="flex justify-between items-center">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-indigo-600">
                        Smart Fridge
                    </h1>
                    {/* Navigation Links or Actions */}
                    <div className="flex space-x-4 items-center">
                        {
                            userLoggedIn
                                ? (
                                    <>
                                        <ul className="flex space-x-14">
                                            <li>
                                                <Link to='/home' className='text-sm text-gray-700 hover:text-indigo-600'>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/about-product' className='text-sm text-gray-700 hover:text-indigo-600'>
                                                    About Product
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link to='/blogs' className='text-sm text-gray-700 hover:text-indigo-600'>
                                                    Blogs
                                                </Link>
                                            </li> */}
                                            <li>
                                                <Link to='/chart' className='text-sm text-gray-700 hover:text-indigo-600'>
                                                    Charts
                                                </Link>
                                            </li>
                                            <li className='flex '>
                                                <Link to='/request-demo' className='text-sm mr-10 text-gray-700 hover:text-indigo-600'>
                                                    Request a Demo
                                                </Link>
                                            </li>
                                        </ul>
                                        <button 
                                            onClick={() => { 
                                                doSignOut().then(() => { 
                                                    navigate('/login') 
                                                }) 
                                            }} 
                                            className='text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg'
                                        >
                                            Logout
                                        </button>
                                    </>
                                )
                                : (
                                    <>
                                        <Link 
                                            to='/login' 
                                            className='text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg'
                                        >
                                            Login
                                        </Link>
                                        <Link 
                                            to='/register' 
                                            className='text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg'
                                        >
                                            Register New Account
                                        </Link>
                                    </>
                                )
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
