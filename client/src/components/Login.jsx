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
    <div className='flex flex-col items-center p-12 gap-12 '>
       <h1 className='text-3xl font-semibold text-center'>სისტემაში შესვლა</h1>

       <form className='flex flex-col gap-6 w-1/2 justify-center items-center' onSubmit={handleLogin} >
          <input type='text' placeholder='ელ-ფოსტა' className='w-1/2 p-2 border-4  border-[#864AF9] rounded-md outline-none' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='პაროლი' className='w-1/2 p-2 border-4  border-[#864AF9] rounded-md outline-none' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='bg-[#864AF9] w-1/2 p-2 rounded-md hover:opacity-70 text-white'>შესვლა</button>
          <span className='text-xl cursor-pointer'>არ გაქვს ანგარიში? <i><Link to = "/register">რეგისტრაცია</Link></i></span>
       </form>
    </div>
  )
}

export default Login
