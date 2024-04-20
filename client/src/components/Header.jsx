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
    <div className='w-full flex items-center justify-between p-8'>
       <div className="logo">
          <h1 className='text-sm md:text-3xl  cursor-pointer text-white' onClick={() => navigate('/')}>LingoBingo</h1>
       </div>

       <nav className=' flex text-white gap-8 text-xl line'>
        {auth ? (
          <>
          <Link to = "/" className='line'>ჩემი პროფილი</Link>
          <button onClick={logout}>გამოსვლა</button>
          </>
        ) : (
          <>
            
          <Link to = "/login" className='line enter w-24 text-center py-1 rounded-md' >შესვლა</Link>
          </>
        )}
       
         
       </nav>
    </div>
  )
}

export default Header
