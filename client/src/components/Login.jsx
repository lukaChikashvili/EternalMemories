import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { motion } from 'framer-motion';

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
    <motion.div initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{duration: 1.5, delay: 1}}
     className='absolute flex flex-col items-center p-12 gap-12 login w-full md:w-1/2 m-auto pt-56 md:ml-12  '>


       <motion.form  className='flex flex-col gap-6 w-full py-8 px-8 justify-center items-center border-2 border-pink-500 rounded-md' onSubmit={handleLogin} >
       <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 0.5 }}
       className='text-3xl text-pink-500 text-center font-bold'>Log in</motion.h1>
          <input type='text' placeholder='Email' className='w-full md:w-1/2 p-2  border-4  border-pink-500 rounded-md outline-none' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' className='w-full md:w-1/2 p-2 border-4  border-pink-500 rounded-md outline-none' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' className='enter w-full md:w-1/2 p-2 rounded-md hover:opacity-70 text-white bg-pink-500'>Log In</button>
          <span className='text-xl cursor-pointer text-white'>don't have account? <i><Link to = "/register" className='underline decoration-pink-500 underline-offset-8 duration-500 ease-in hover:decoration-wavy'>register</Link></i></span>
       </motion.form>
    </motion.div>
  )
}

export default Login
