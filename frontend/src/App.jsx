import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Doctors from './pages/Doctors'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile';
import Appointment from './pages/Appointment';
import MyAppointment from './pages/MyAppointment';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//import { assets } from '../assets/assets';

function App () {
  return(
    <div className='mx-4 sm:mx-[10%]'> 
    <ToastContainer/>
    <Navbar/>
     <Routes>
      
      <Route path='/'element= {<Home />}/>
      <Route path='/doctors' element= {<Doctors />}/>
      <Route path='/doctors/:speciality' element= {<Doctors />}/>
      <Route path='/login' element= {<Login />}/>
      <Route path='/about'element= {<About />}/>
      <Route path='/contact'element= {<Contact />} />
      <Route path='/my-profile' element= {<MyProfile />} />
      <Route path='/my-appointments' element= {< MyAppointment />} />
      <Route path='/appointment/:docId' element= {<Appointment />} />
      
     </Routes>
     <Footer/>



    </div>
  )
}
export default App;

