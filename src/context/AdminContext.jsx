import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import { changeAvailablity } from "../../../backend/controller/doctorController";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  console.log(aToken);

  const [doctors, setDoctors] = useState([])
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

 const getAllDoctors = async () => {

  try {

    const {data} = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {headers:{aToken}})
    if(data.success){
      setDoctors(data.doctors)
      console.log(data.doctors)

    }else {
      toast.error(data.message)
    }

  }
  catch(error){
    toast.error(error.message)

  }
 }

 const onChangeAvailability = async (docId) => {

  try{
   
    const {data} = await axios.post(backendUrl + '/api/admin/change-availability', {docId},{headers:{aToken}})
    if (data.success){
      toast.success(data.message)
      getAllDoctors()

    }else {
      toast.error(data.message)
    }

  }
  catch (error) {
    toast.error(error.message)
  
  }
 }

 const value = {
  aToken,
  setAToken,
  backendUrl,
  doctors,
  getAllDoctors,
  changeAvailability: onChangeAvailability, // ✅ correct function
};


  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
