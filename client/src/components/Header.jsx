import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const auth = !!localStorage.getItem('token');
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');

    navigate('/');
  }

  return (
    <div className='w-full flex items-center justify-between bg-[#864AF9] p-8'>
       <div className="logo">
          <h1 className='text-sm md:text-3xl text-white cursor-pointer'>Schooly</h1>
       </div>

       <nav className='text-white flex gap-8 text-xl line'>
        {auth ? (
          <>
          <Link to = "/" className='line'>ჩემი პროფილი</Link>
          <button onClick={logout}>გამოსვლა</button>
          </>
        ) : (
          <>
          <Link to = "/" className='line'>მთავარი</Link>
          <Link to = "/" className='line'>შესახებ</Link>
          </>
        )}
       
         
       </nav>
    </div>
  )
}

export default Header
