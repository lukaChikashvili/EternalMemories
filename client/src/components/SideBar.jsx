import React from 'react'
import { Link } from 'react-router-dom'
import { School } from 'lucide-react';

const SideBar = () => {
  return (
    <div className='w-1/5 min-h-screen bg-[#D8D9DA] flex flex-col items-center gap-8 pt-12'>
        <div className='flex items-center gap-4 w-full text-center shadow-lg justify-center p-4'>
            <School />
        <Link className='text-xl font-semibold ' to = "/profile/schools">სკოლები</Link>
        </div>
     
        <Link className='text-xl font-semibold w-full text-center shadow-lg'>სკოლები</Link>
        <Link className='text-xl font-semibold w-full text-center shadow-lg'>სკოლები</Link>
        <Link className='text-xl font-semibold w-full text-center shadow-lg'>სკოლები</Link>
    </div>
  )
}

export default SideBar
