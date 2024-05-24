import React, { useContext, useState } from 'react'
import axios from 'axios';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CreateModal = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');  
    const [birth, setBirth] = useState('');
    const [death, setDeath] = useState('');
    const [location, setLocation] = useState('');
    const [img, setImg] = useState('');
    const [banner, setBanner] = useState('');
    const [bio, setBio] = useState('');
  
    const { events, setEvents} = useContext(EventContext);


   let navigate = useNavigate();
   const [err, setErr] = useState('Log in first to create memorial');

    
    
    const handleEvent = async () => {
        const token = localStorage.getItem('token');

        if(token) {
          const response = await axios.post('http://localhost:5000/api/events', {
            name, surname, birth, death, location, img, banner, bio
        }, 
            {
                headers: {
                  Authorization: `Bearer ${token}`
              }
              }
        );
        setEvents([...events, response.data.events]);
        navigate('/profile');
        }else {
           setErr(err);
        }

       
         
    }


  return (
    <div className='absolute flex flex-col items-center justify-center min-h-screen w-full m-auto gap-8 text-white pt-36 ' >

      <ArrowLeft className='absolute top-36 cursor-pointer duration-500 ease-in hover:opacity-50 left-96 ' onClick={() => navigate('/profile')}   size={40} />
      <h1 className='text-2xl text-pink-500 font-bold'>Create memorial page easily. Enter details</h1>
        <div className='flex flex-col items-start gap-4  '>
        <label className='text-xl font-bold'>First name </label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none w-96 text-pink-500' onChange={(e) => setName(e.target.value)}/> 
        </div> 
 
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Last name</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none  w-96 text-pink-500' onChange={(e) => setSurname(e.target.value)}/> 
        </div> 
 
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Date of birth</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none  w-96 text-pink-500' onChange={(e) => setBirth(e.target.value)}/> 
        </div> 
    
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>date of passing</label> 
       <input type = "text" className='py-2 px-4 rounded-md outline-none w-96 text-pink-500' onChange={(e) => setDeath(e.target.value)}/> 
        </div> 
 
        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Place of residence</label>
       <input type = "text" className='py-2 px-4 rounded-md outline-none w-96 text-pink-500' onChange={(e) => setLocation(e.target.value)}/>
        </div>

        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Memorial photo</label>
       <input type = "text" className='py-2 px-4 rounded-md outline-none w-96 text-pink-500' onChange={(e) => setImg(e.target.value)}/>
        </div>

        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Memorial banner</label>
       <input type = "text" className='py-2 px-4 rounded-md outline-none w-96 text-pink-500' onChange={(e) => setBanner(e.target.value)}/>
        </div>

        <div className='flex flex-col items-start gap-4 '>
        <label className='text-xl font-bold'>Write biography</label>
       <input type = "text" className='py-2 px-4 rounded-md outline-none w-96 text-pink-500' onChange={(e) => setBio(e.target.value)}/>
        </div>


        <button  onClick={handleEvent} className='bg-pink-500 text-white py-2 px-8 w-96 rounded-md shadow-lg mb-12 duration-500 ease-in hover:opacity-55'>Create memorial</button>

        <h2 className='text-xl text-pink-500 underline underline-offset-8  '>{err}</h2>
    </div>
  )
}

export default CreateModal
