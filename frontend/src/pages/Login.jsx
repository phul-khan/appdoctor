import React, { useState } from 'react'
// import Banner from '../components/Banner'

function Login() {
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const[name,setName] = useState('')

  const onSubmitHandler = async () => {
    event.preventDefault()
  }
  return (
    <form  className='min-h[80vh] flex items-center' action="">
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:win-2-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ?  'Create account' : "Login"}</p>
        <p>Please {state === 'Sign Up' ?  'sign up' : "Log in"} to book Appointment</p>
       
       {
       state === "Sign Up" && <div className='w-full'>
       <p>Full Name</p>
       <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="" onChange={(e)=>setName(e.target.name)} value={name} required/>
     </div>
       }

        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.name)} value={Password} required/>
        </div>
        <button className='bg-blue-500 text-white w-full py-2 rounded-md text border-radius'>{state === 'Sign Up' ?  'Create account' : "Login"}</button>
      {
      state ==='Sign Up'
      ? <p>Already have an account ? <span onClick={()=>setState('Login ')}className='text-blue underline cursor-pointer'>Login here</span> </p>
      : <p>Create an new account?  <span onClick={()=>setState('Sign Up')}className='text-blue underline cursor-pointer'>click here </span></p>
      }

      </div>


    </form>
  )
}

export default Login
