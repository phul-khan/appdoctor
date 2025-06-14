import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../assets/assets'

function Navbar() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
    setToken('false')
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      
      {/* -- Desktop and Mobile Logo: Unique Icon with Custom Text -- */}
      <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
        {/* Custom Logo - Can replace with an image or SVG */}
        <div className='bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded-lg'>
          <FontAwesomeIcon icon={faStethoscope} className='text-white text-3xl' />
        </div>
        <div className='leading-tight'>
          <p className='text-2xl font-semibold text-blue-600 tracking-wide'>MediCare</p> {/* Updated text */}
          <p className='text-sm text-gray-600'>Your Health Hub</p>
        </div>
      </div>

      {/* -- Desktop Navigation -- */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/' className='hover:text-red-500'>
          <li className='py-1 text-lg font-bold'>Home</li>
        </NavLink>
        <NavLink to='/doctors' className='hover:text-red-500'>
          <li className='py-1 text-lg font-bold'>All Doctors</li>
        </NavLink>
        <NavLink to='/contact' className='hover:text-red-500'>
          <li className='py-1 text-lg font-bold'>Contact</li>
        </NavLink>
        <NavLink to='/about' className='hover:text-red-500'>
          <li className='py-1 text-lg font-bold'>About</li>
        </NavLink>
      </ul>

      {/* -- Right Section: Auth/Profile + Mobile Menu Icon -- */}
      <div className='flex items-center gap-4'>
        {
          token ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
          )
        }

        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        
        {/* -- Mobile Menu -- */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <div className='flex items-center gap-2'>
              {/* Custom Logo for Mobile - Updated text */}
              <div className='bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded-lg'>
                <FontAwesomeIcon icon={faStethoscope} className='text-white text-3xl' />
              </div>
              <div className='leading-tight'>
                <p className='text-xl font-bold text-gray-800 tracking-wide'>MediCare</p> {/* Updated text */}
                <p className='text-sm font-medium text-blue-500 tracking-widest'>Your Health Hub</p>
              </div>
            </div>

            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/' className='px-4 py-2 rounded inline-block text-lg font-bold hover:text-red-500'>
              Home
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' className='px-4 py-2 rounded inline-block text-lg font-bold hover:text-red-500'>
              All Doctors
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' className='px-4 py-2 rounded inline-block text-lg font-bold hover:text-red-500'>
              About
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' className='px-4 py-2 rounded inline-block text-lg font-bold hover:text-red-500'>
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
