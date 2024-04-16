import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center p-12 gap-12 '>
       <h1 className='text-3xl font-semibold text-center'>სისტემაში შესვლა</h1>

       <form className='flex flex-col gap-6 w-1/2 justify-center items-center' >
          <input type='text' placeholder='ელ-ფოსტა' className='w-1/2 p-2 border-4  border-[#525CEB] rounded-md outline-none' />
          <input type='password' placeholder='პაროლი' className='w-1/2 p-2 border-4  border-[#525CEB] rounded-md outline-none'  />
          <button type='submit' className='bg-[#525CEB] w-1/2 p-2 rounded-md hover:opacity-70 text-white'>შესვლა</button>
          <span className='text-xl cursor-pointer'>არ გაქვს ანგარიში? <i><Link to = "/register">დარეგისტრირდი</Link></i></span>
       </form>
    </div>
  )
}

export default Login
