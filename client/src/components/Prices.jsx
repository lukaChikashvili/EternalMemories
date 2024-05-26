import React from 'react'
import { motion } from 'framer-motion'
import example from '../assets/example.png';


const Prices = () => {
  return (
    <div className='text-white min-h-screen pt-64 absolute w-full '>
        <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 0.5 }} className='text-5xl text-pink-500 fullLine  '>Example memorial.</motion.h1>

                <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.5 }}
                 className='pt-8 text-2xl'>Create memorial page for your loved one.</motion.p>

                <motion.img initial = {{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 2}} className='w-4/5 rounded-md pt-12' src = {example} />



    </div>
  )
}

export default Prices
