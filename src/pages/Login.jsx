import React, { useState, useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState("Admin");
    const { aToken,setAToken, backendUrl } = useContext(AdminContext);
console.log(setAToken, backendUrl);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("form submitted")
        // console.log("the state is",state);

        try {
            if (state === "Admin") {
                console.log(email,password)
                const { data } = await axios.post("http://localhost:4000/api/admin/login", { email, password });
                if (data.success) {
                    console.log("data submitted succesfully")
                    console.log("the token is: ",data.token);
                    setAToken(data.token);
                    localStorage.setItem("aToken", data.token);
                    console.log("the token is: ",aToken); 
                    
                }
            } else {
                // Doctor login logic here
                console.log("data success failed")
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'>
                    <span className='text-blue-500'>{state}</span> Login
                </p>
                <div className='w-full'>
                    <p>Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='border border-[#DADADA] rounded w-full p-2 mt-1'
                        type='email'
                        required
                    />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='border border-[#DADADA] rounded w-full p-2 mt-1'
                        type='password'
                        required
                    />
                </div>
                <button type='submit' className='bg-blue-500 text-white w-full py-2 rounded-md'>Login</button>
                {
                    state === 'Admin'
                        ? <p>Doctor Login? <span className='text-blue-500 underline cursor-pointer' onClick={() => setState('Doctor')}>Click here</span></p>
                        : <p>Admin Login? <span className='text-blue-500 underline cursor-pointer' onClick={() => setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;
