import axios from 'axios';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

const FullPage = () => {

     let { id } = useParams();
     const [fullPage, setFullPage] = useState(null);
     let navigate = useNavigate();

     useEffect(() => {
        const getFull = async () => {
            const response = await axios.get(`http://localhost:5000/api/events/${id}`);
        setFullPage(response.data.oneEvent);
       
        }

        getFull();
     }, []);

     const showComments = (id) => {
      navigate(`/events/${id}/comments`);
     }
  return (
    <div className='absolute w-full'>
        {fullPage && (
 <div className='w-full min-h-screen bg-black  absolute pt-28'>
 <img className='w-4/5 m-auto rounded-md h-56 object-cover' src = {fullPage.banner}   />
 <div className='flex flex-col gap-8'>
 <img className = "rounded-full w-56 h-56 object-cover border-4 m-auto -mt-28 relative border-pink-500" src = {fullPage.img} />
 <h1 className='text-6xl text-pink-500 font-bold text-center'>{fullPage.name}   {fullPage.surname} </h1>
 <p className='text-white text-xl text-center'>{fullPage.birth} -  {fullPage.death}</p>
 <p className='text-white text-xl text-center'>{fullPage.location}</p>
 </div>

 <div className='flex items-center justify-center pt-12 gap-8'>
     <div className='text-white flex items-center gap-4 text-2xl border-2 border-pink-500 py-2 px-8 rounded-md'>
       <BookOpen />
       <p>Biography</p>
     </div>

     <div className='text-white flex items-center gap-4 text-2xl border-2 border-pink-500 py-2 px-8 rounded-md'>
       <BookOpen />
       <p>Location</p>
     </div>

     <div className='text-white flex items-center gap-4 text-2xl border-2 border-pink-500 py-2 px-8 rounded-md'>
       <BookOpen />
       <p>Memory wall</p>
     </div>
 </div>

 <div>

  <h2 className='text-white text-2xl w-3/5 m-auto pt-24' style={{lineHeight: '3rem'}}>
 <span className='text-7xl text-pink-500 font-bold'>{fullPage.bio[0]}</span>
 {fullPage.bio}
  </h2>
 </div>


 <div className='pt-28 px-36 text-white w-4/5 m-auto'>
  <h1 className='text-pink-500 font-bold text-3xl underline underline-offset-8'>Funeral</h1>
   <div className='flex flex-col gap-4 border-2 border-pink-500 items-center mt-12 p-12 rounded-md'>
      <div className='flex items-center gap-4'>
     <MapPin />
      <span className='text-2xl'>Location:</span>
      </div>
      <p>Live Oak Memorial Park
200 E Duarte Rd, Monrovia, CA 91016, USA</p>
   </div>
   
   <div className='flex flex-col gap-4 border-2 border-pink-500 items-center mt-12 p-12 rounded-md'>
      <div className='flex items-center gap-4'>
    <Calendar />
      <span className='text-2xl'>Date & time:</span>
      </div>
      <p>Monday, April 18, 2022
      4:00 PM to 5:00 PM</p>
   </div>
   

 </div>

 <div className='pt-28 px-36 text-white w-4/5 m-auto'>
 <h1 className='text-pink-500 font-bold text-3xl underline underline-offset-8' onClick={() => showComments(fullPage._id)}>Memory wall</h1>

 </div>
 <Outlet />
</div>
        )}
        

    </div>
  )
}

export default FullPage
