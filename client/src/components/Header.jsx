import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between bg-[#525CEB] p-8'>
       <div className="logo">
          <h1 className='text-sm md:text-3xl text-white cursor-pointer'>LingoBingo</h1>
       </div>

       <nav className='text-white flex gap-8 text-xl line'>
         <Link to = "/" className='line'>მთავარი</Link>
         <Link to = "/" className='line'>შესახებ</Link>
         <Link to = "/" className='line'>ლექსიკონი</Link>
       </nav>
    </div>
  )
}

export default Header
