import React from 'react'
import { assets } from '../assets/assets';

 function About  ()  {
  return (
 <div>

  <div className='text-center text-2xl-pt-10 text-gray-600'>
    <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
  </div>
  <div className='my-10 flex flex-col md:flex-row gap-12'>
    <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
      <p>Our Doctor Appointment System makes it easy for patients to book appointments online, saving time and improving access to healthcare services</p>
      <p>Patients can browse doctor profiles, choose available slots, and receive updates, while doctors can manage their schedules efficiently.</p>
      <b className='text-gray-800'> Our Vision</b>
      <p>Built with modern web technologies, the system offers a simple, secure, and user-friendly experience for both patients and doctors.</p>
    </div>

  </div>
  <div className='text-xl my-4'>
    <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
  </div>

  <div className='flex flex-col md:flex-row md-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-200 hover:text-while transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>EFFIENCEY:</b>
    <p>Streamlined Appointment Scheduling That Fits Into Your BUsy LifeStyle</p>
    </div>
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-200 hover:text-while transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>CONVIENCE:</b>
    <p>Access To A Network of Trusted HealthCare Professionals In  Your Area.</p>
</div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-200 hover:text-while transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>PERSONALIZATION</b>
    <p>Tailored Recommendation And Reminders To Help you Stay On Top Of Your Health</p>
    </div>
  </div>
  </div>
 
)
};
  


export default About;
