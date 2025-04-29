import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

function DoctorList() {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken, getAllDoctors]);
  

  return (
    <div className="m-5 max-h-[90vh] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">All Doctors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((item) => (
          <div key={item._id} className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center border hover:shadow-lg transition">
            <div className="w-[199px] h-[200px] bg-[#f5f7fa] rounded-xl flex items-center justify-center overflow-hidden mb-4">
            <img
  src={item.image || '/default-doctor.png'}
  alt={item.name || 'doctor'}
  className="w-[120px] h-[160px] object-cover rounded-md"
/>

            </div>

            <p className="text-lg font-bold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">{item.speciality || 'No speciality info'}</p>

            <div className="flex items-center justify-center gap-2 mt-3">
            <input
  type="checkbox"
  checked={item.available}
  onChange={() => changeAvailability(item._id)}
  className="form-checkbox h-4 w-4 text-green-500"
/>

              <p className={`text-sm ${item.available ? 'text-green-600' : 'text-red-500'}`}>
                {item.available ? 'Available' : 'Unavailable'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
