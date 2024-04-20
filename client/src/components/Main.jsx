import { Mouse } from 'lucide-react'
import React from 'react'
import About from './About'
import Langs from './Langs'

const Main = () => {
  return (
    <>
    <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <h1 className='text-white enter text text-8xl p-4 rounded-md'>LingoBingo</h1>
        <div className='flex gap-4'>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
        </div>
        <h2 className='text-white text-7xl'>Elevate your language skills</h2>
        <h2  className='text-white text-5xl'>Linking Cultures Through Language</h2>
        <Mouse className='text-white ' size={40} />

     
    </div>
  
       <About />
       <Langs />
       </>
  )
}

export default Main
