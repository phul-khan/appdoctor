import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import assets from '../assets/assets'; // FIXED path

function Sidebar() {
  const { aToken } = useContext(AdminContext);

  return (
    <div>
      {aToken && (
        <ul className='text-[#515151] mt-5 '>
          <NavLink
  to="/admin-dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  }
>
  <img src={assets.home_icon} alt="Dashboard" />
  <p>Dashboard</p>
</NavLink>


          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
              }`
            }
          >
            <img src={assets.appointment_icon} alt="Appointments" />
            <p>Appointments</p>
          </NavLink>

          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
              }`
            }
          >
            <img src={assets.add_icon} alt="Add Doctor" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink
            to="/doctor-list"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
              }`
            }
          >
            <img src={assets.people_icon} alt="Doctor List" />
            <p>Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
