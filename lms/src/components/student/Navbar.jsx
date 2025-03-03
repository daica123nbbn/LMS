import React, { useContext } from 'react'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'
import { useUser, useClerk, UserButton } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext.jsx'
const Navbar = () => {

    const { navigate, isEducator } = useContext(AppContext)
    const isCourseListPage = location.pathname.includes('/course-list');
    const { openSignIn } = useClerk()
    const { user } = useUser()
    return (
        <div className={`flex items-center justify-between px-5 sm:px-10 md:px-14 
        lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    {
                        user && <>
                            <button onClick={() => { navigate('/educator') }}>{isEducator ? 'Educator Dashboard' : 'Become Educator'} </button>
                            <Link to='/my-enrollments' >My Enrollments</Link>
                        </>
                    }
                </div>
                {
                    user ? <UserButton /> :
                        <button onClick={() => openSignIn()} className='bg-blue-500 text-white px-5 
                    py-2 rounded-full'>Creat Account</button>
                }

            </div>

        </div>
    )
}

export default Navbar
