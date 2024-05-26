import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Register = () => {
 // REGISTER USER STATES
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  let navigate = useNavigate();

  // SUCCESS TEXT
  const [success, setSuccess] = useState(false);

// REGISTER FUNCTION
   const handleRegister = async (e) => {
     e.preventDefault();
     
     const response = await axios.post('https://eternalmemories.onrender.com/api/register', {name, surname, email, password});

     if(response.status === 200) {
       setSuccess(true);
       setTimeout(() => {
         navigate('/');
       }, 3000);
     }

   }

  return (
    <motion.div initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    transition={{duration: 1.5, delay: 1}}
    className='flex flex-col items-center p-12 gap-12 login w-full md:w-1/2 m-auto absolute pt-48 md:ml-12 '>

{success ? (
  <p className='text-xl text-green-600'>you successfully logged in</p>
) : (
<form className='flex flex-col gap-6 w-full py-8 justify-center items-center border-2 border-pink-500 rounded-md' onSubmit={handleRegister} >
<motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 0.5 }}
className='text-3xl font-semibold text-center text-pink-500'>Register</motion.h1>
   <input type='text' placeholder='Name' className='w-4/5 md:w-1/2 p-2 border-4   border-pink-500 rounded-md outline-none' onChange={(e) => setName(e.target.value)} />
   <input type='text' placeholder='Surname' className='w-4/5 md:w-1/2 p-2 border-4  border-pink-500 rounded-md outline-none'  onChange={(e) => setSurname(e.target.value)} />
   <input type='text' placeholder='Email' className='w-4/5 md:w-1/2 p-2 border-4  border-pink-500 rounded-md outline-none'  onChange={(e) => setEmail(e.target.value)}/>
   <input type='password' placeholder='Password' className='w-4/5 md:w-1/2 p-2 border-4  border-pink-500 rounded-md outline-none'  onChange={(e) => setPassword(e.target.value)} />
   <button type='submit' className='bg-pink-500 w-4/5 md:w-1/2 p-2 rounded-md hover:opacity-70 text-white'>Register</button>
   <span className='text-xl cursor-pointer text-white'>You have account? <i><Link to  ="/login" className='underline decoration-pink-500 underline-offset-8 duration-500 ease-in hover:decoration-wavy'>Login</Link></i></span>
</form>
)}

    </motion.div>
  )
}

export default Register
