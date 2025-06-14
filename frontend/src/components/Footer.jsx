import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='md:mx-10'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-40 text-sm">

        {/* --- Left section (Logo & tagline) --- */}
        <div>
          <div className='flex items-center gap-2 mb-3'>
            <FontAwesomeIcon icon={faStethoscope} className='text-blue-600 text-3xl' />
            <div className='leading-tight'>
              <p className='text-xl font-bold text-blue-600 tracking-wide'>MediCare</p>
             
            </div>
          </div>
          <p className='w-full md:w-2/3 text-black-600 leading-6'>
            Effortlessly book and manage doctor appointments with our system.
          </p>
        </div>

        {/* --- Center section (Company links) --- */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-black-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* --- Right section (Contact info) --- */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='text-black-600 text-sm space-y-2'>
            <li>+9779819843902</li>
            <li>uniquephul@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ---- Copyright ---- */}
      <hr />
      <p className='py-5 text-sm text-center text-gray-600'>
        © 2025 Doctor Desk – All Rights Reserved
      </p>
    </div>
  )
}

export default Footer;
