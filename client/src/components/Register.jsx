import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
 // REGISTER USER STATES
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // SUCCESS TEXT
  const [success, setSuccess] = useState(false);

// REGISTER FUNCTION
   const handleRegister = async (e) => {
     e.preventDefault();
     
     const response = await axios.post('http://localhost:5000/api/register', {name, surname, email, password});

     if(response.status === 200) {
       setSuccess(true);
     }

   }

  return (
    <div className='flex flex-col items-center p-12 gap-12'>
        <h1 className='text-3xl font-semibold text-center'>რეგისტრაცია</h1>
{success ? (
  <p className='text-xl text-green-600'>თქვენ წარმატებით დარეგისტრირდით</p>
) : (
<form className='flex flex-col gap-6 w-1/2 justify-center items-center' onSubmit={handleRegister} >
   <input type='text' placeholder='სახელი' className='w-1/2 p-2 border-4  border-[#525CEB] rounded-md outline-none' onChange={(e) => setName(e.target.value)} />
   <input type='password' placeholder='გვარი' className='w-1/2 p-2 border-4  border-[#525CEB] rounded-md outline-none'  onChange={(e) => setSurname(e.target.value)} />
   <input type='text' placeholder='ელ-ფოსტა' className='w-1/2 p-2 border-4  border-[#525CEB] rounded-md outline-none'  onChange={(e) => setEmail(e.target.value)}/>
   <input type='password' placeholder='პაროლი' className='w-1/2 p-2 border-4  border-[#525CEB] rounded-md outline-none'  onChange={(e) => setPassword(e.target.value)} />
   <button type='submit' className='bg-[#525CEB] w-1/2 p-2 rounded-md hover:opacity-70 text-white'>შესვლა</button>
   <span className='text-xl cursor-pointer'>უკვე გაქვს ანგარიში? <i><Link to  ="/">რეგისტრაცია</Link></i></span>
</form>
)}

    </div>
  )
}

export default Register
