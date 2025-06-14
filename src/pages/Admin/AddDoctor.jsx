import React, { useState, useContext } from 'react';

import assets from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
  
  const [docImg, setDocImg] = useState(false)
  const [name ,setName] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const [experience, setExperience ] = useState('1 year')
  const [fees, setFees ] = useState('')
  const [about, setAbout ] = useState('')
  const [speciality, setSpeciality ] = useState('General physician')
  const[degree, setDegree] = useState('')
  const[address, setAddress] = useState('')

  
  const {backendUrl, aToken} = useContext(AdminContext)
  
  const onSubmitHandler = async (event) => {
    console.log("the token is",aToken)
    event.preventDefault();
    try {
      if (!docImg) return toast.error('Image not selected');
      
      const formData = new FormData()
      
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', fees)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('about', about)
      formData.append('address', address)

      console.log("the form data is: "+degree)
  const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData, {headers:{aToken}})
  
  if(data.success){
      toast.success(data.message)
      setDocImg(false)
      setName('')
      setPassword('')
      setEmail('')
      setAddress('')
      setDegree('')
      setFees('')
      
    } else {
      console.log("api call failed")
      toast.error(data.message)
    }
    
  } catch (error) {
      toast.error('Error Messsage')
      console.log(error)
    }
  };
  
  

  return (
    <form onSubmit={onSubmitHandler} className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Add Doctor</h2>

      <div className="flex flex-col items-center mb-10">
        <label htmlFor="doc-img" className="cursor-pointer">
        <img
  src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
  alt="Upload"
  className="w-28 h-28 object-cover rounded-full border border-gray-400"
/>

        </label>
        <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
        <p className="text-center text-gray-500 text-sm mt-3 leading-tight">
          Upload doctor picture
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Doctor Name</label>
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Name" className="w-full border border-gray-400 px-4 py-2 rounded-lg" />
        </div>
        <div>
  <label className="text-sm font-medium text-gray-700">Speciality</label>
  <select  onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className="w-full border border-gray-400 px-4 py-2 rounded-lg">
    <option value="general">General Physician</option>
    <option value="cardiologist">Cardiologist</option>
    <option value="neurologist">Neurologist</option>
    <option value="dermatologist">Dermatologist</option>
    <option value="pediatrician">Pediatrician</option>
    <option value="gynecologist">Gynecologist</option>
   
  </select>
</div>

        

        <div>
          <label className="text-sm font-medium text-gray-700">Doctor Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Your email" className="w-full border border-gray-400 px-4 py-2 rounded-lg" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Education</label>
          <input  onChange={(e)=> setDegree(e.target.value)} value={degree} type="text" placeholder="Education" className="w-full border border-gray-400 px-4 py-2 rounded-lg" />
        </div>
        <div>
  <label className="text-sm font-medium text-gray-700">Doctor Password</label>
  <input
    type=" password"
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border border-gray-400 px-4 py-2 rounded-lg"
  />
</div>
        <div>
          <label className="text-sm font-medium text-gray-700">Experience</label>
          <select  onChange={(e)=> setExperience(e.target.value)} value={experience} className="w-full border border-gray-400 px-4 py-2 rounded-lg">
            <option value="">Select experience</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="4">4 years</option>
            <option value="5">5 years</option>
            <option value="6">6 years</option>
            <option value="7">7 years</option>
            <option value="8">8 years</option>
            <option value="9">9 years</option>
            <option value="10">10+ years</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Fees</label>
          <input  onChange={(e)=> setFees(e.target.value)} value={fees} type="text" placeholder="Your fees" className="w-full border border-gray-400 px-4 py-2 rounded-lg" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Address 1</label>
          <input  onChange={(e)=> setAddress(e.target.value)} value={address} type="text" placeholder="Address 1" className="w-full border border-gray-400 px-4 py-2 rounded-lg" />
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium text-gray-700">About Me</label>
        <textarea onChange={(e)=> setAbout(e.target.value)} value={about}
          placeholder="Write about yourself"
          className="w-full border border-gray-400 px-4 py-2 rounded-lg resize-none h-32"
        ></textarea>
      </div>

      <div className="text-right mt-6">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
