
import React from 'react'
import About from './About'
import { motion } from 'framer-motion';
import Prices from './Prices';
import { useNavigate } from 'react-router-dom';




const Main = () => {

  let navigate = useNavigate();
  return (
    <>
  
        <div className='w-full md:w-1/2 pt-56 md:pt-56 px-8 md:px-28 absolute' style={{minHeight: '300vh'}}>
          <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 0.5 }}
                      className='text-5xl md:text-6xl text-white  ' style={{lineHeight: "5rem"}}><span className='text-pink-500 '>Cherishing </span> Memories Forever.</motion.h1>

          <motion.p initial = {{ opacity: 0}}
                     whileInView={{ opacity: 1}}
                     transition={{ duration: 1.5, delay: 1.5 }}
          className='text-white text-xl md:text-2xl pt-2 md:pt-8' style={{lineHeight: "2.5rem"}}>
Craft a heartfelt and elegant memorial page to celebrate the life and legacy of your loved one. 
</motion.p>

 <div className='flex gap-4 pt-8' >
   <motion.button initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 0.5, delay: 2 }}

   className='text-white bg-pink-500 py-2 px-8 rounded-md shadow-lg text-sm md:text-xl duration-500 ease-in hover:opacity-80' onClick={() => navigate('/create')}>Create memorial page</motion.button>

   <motion.button initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 0.5, delay: 2 }}
   className='text-white border-2 border-pink-500 py-2 px-8 rounded-md shadow-lg text-xl duration-500 ease-in hover:bg-pink-500' onClick={() => navigate('/example')}>Example memorial</motion.button>
 </div>

 <About />
 <Prices />

        </div>


       
       </>
  )
}

export default Main
