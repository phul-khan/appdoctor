import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AllAppointment from './pages/Admin/AllAppointment';
import Dashboard from "./pages/Admin/Dashboard";
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className='bg-[#f8f9fd] min-h-screen'>
      <ToastContainer />
      <Navbar className="flex items-start" />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
        <Routes>
  <Route path='/admin-dashboard' element={<Dashboard />} />
  <Route path='/add-doctor' element={<AddDoctor />} />
  <Route path='/doctor-list' element={<DoctorList />} />
  <Route path='/appointments' element={<AllAppointment />} />
</Routes>

        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
