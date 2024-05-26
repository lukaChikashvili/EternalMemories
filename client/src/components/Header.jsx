import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  let navigate = useNavigate();
  let loggedIn = localStorage.getItem('token');

  const logout = () => {
     localStorage.removeItem('token');
     navigate('/');
  }
  return (
    <div className='absolute w-full flex items-center justify-between text-white py-8 px-12 md:px-24 z-10 '>
       <div className="logo">
           <motion.h1 initial = {{opacity: 0, translateX: -10}}
           whileInView={{opacity: 1, translateX: 0}}
           transition={{duration: 1.5, delay: 1.5}}
           className='hidden md:block md:text-3xl cursor-pointer' onClick={() => navigate('/')}>EternalMemories</motion.h1>
       </div>

       <nav className='flex gap-8 items-center '>
         {loggedIn ?   <motion.h2 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 1.5 }}
          className='text-xl cursor-pointer line' onClick={logout}>Log out</motion.h2> : 
     <>
          <motion.h2 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
          whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1, delay: 1.5 }}

className='text-xl cursor-pointer line' onClick={() => navigate('/login')}>Log in</motion.h2>
<motion.h2 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
          whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1, delay: 1.8 }}
className='text-xl border-2 border-white rounded-md py-1 px-6 cursor-pointer duration-500 ease-in hover:bg-white hover:text-black' onClick={() => navigate('/create')}>Get started</motion.h2>
  </>
          }
        
       </nav>
    </div>
  )
}

export default Header
