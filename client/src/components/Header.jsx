import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full flex items-center justify-between text-white py-8 px-24'>
       <div className="logo">
           <h1 className='text-3xl cursor-pointer'>EternalMemories</h1>
       </div>

       <nav className='flex gap-8 items-center '>
          <h2 className='text-xl cursor-pointer line'>Log in</h2>
          <h2 className='text-xl border-2 border-white rounded-md py-1 px-6 cursor-pointer duration-500 ease-in hover:bg-white hover:text-black'>Get started</h2>
       </nav>
    </div>
  )
}

export default Header
