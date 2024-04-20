import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  // HANDLE LOGIN 
  const handleLogin = async (e) => {
     e.preventDefault();

     const response = await axios.post('http://localhost:5000/api/login', {email, password});

     const token = response.data.token;

     localStorage.setItem('token', token);

     if(response.status === 200) {
       navigate('/profile');
     }
  }

  return (
    <div className='flex flex-col items-center p-12 gap-12 login w-1/2 m-auto mt-16'>
       <h1 className='text-3xl text-black text-center font-bold'>Log in</h1>

       <form className='flex flex-col gap-6 w-full justify-center items-center' onSubmit={handleLogin} >
          <input type='text' placeholder='Email' className='w-1/2 p-2 border-4  border-[#864AF9] rounded-md outline-none' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='w-1/2 p-2 border-4  border-[#864AF9] rounded-md outline-none' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='enter w-1/2 p-2 rounded-md hover:opacity-70 text-white'>Log In</button>
          <span className='text-xl cursor-pointer'>don't have account? <i><Link to = "/register">register</Link></i></span>
       </form>
    </div>
  )
}

export default Login
