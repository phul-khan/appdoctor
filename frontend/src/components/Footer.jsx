import React from 'react'
import { assets } from '../assets/assets'

function Footer ()  {
  return (
    <div className='md:mx-10'>
     
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-40 text-sm">

        {/* --- left section-- */}
        <div>
            <img className="mb-5 w-40" src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-black-600 leading-6'>Effortlessly book and manage doctor appointments with our system.</p>
        </div>

        {/* --- center section-- */}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-black-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            

            </ul>
        </div>

        {/* --- Right section-- */}
        <div>
           <p  className='text-xl font-medium mb-5'>GEt IN TOUCH</p> 
           <ul  className='text-xl font-medium mb-5'>
            <li>+9779819843902</li>
            <li>uniquephul@gmail.com</li>

           </ul>
        </div>
     </div>
     {/* ---- copyright text ---- */}
     <div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2025@Medicare -All Right Reserved</p>
     </div>
    </div>
  )
}

export default Footer;
