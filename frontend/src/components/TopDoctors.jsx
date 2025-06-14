import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-8 my-16 text-gray-900 px-4 sm:px-0'>

      {/* Title + Subtitle */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold relative inline-block pb-2'>
          Top Doctors to Book
          <span className='block w-2/3 mx-auto mt-2 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full'></span>
        </h1>
        <p className='text-gray-600 mt-4 text-sm max-w-md mx-auto'>
          Simply browse through our list of highly rated and trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-screen-lg'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
            key={index}
            className='bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden'
          >
            <img className='w-full h-28 object-cover' src={item.image} alt={item.name} />
            <div className='p-4 text-center'>
              <div className='flex justify-center items-center gap-2 text-sm text-green-600 mb-1'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>Available</span>
              </div>
              <p className='font-semibold'>{item.name}</p>
              <p className="text-blue-500 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
        className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-10 py-2 rounded-full shadow hover:shadow-lg transition-all duration-300"
      >
        Explore More
      </button>
    </div>
  );
};

export default TopDoctors;
