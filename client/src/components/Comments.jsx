import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Comments = () => {
    const [comment, setComment] = useState('');

    const { id } = useParams();

    const writeComment = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.post(`http://localhost:5000/api/events/${id}/comments`, {text: comment}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } 
        );

        setComment('');

    }


  return (
    <div className='pt-12 px-36 text-white w-4/5 m-auto pb-36'>
       <div className='flex gap-4 items-center '>
        <input type='text' placeholder='Your message ' className='outline-none text-pink-500 py-2 px-12 rounded-md' onChange={(e) => setComment(e.target.value)}/>
        <button className='bg-pink-500 px-12 py-2 border-2 rounded-md duration-500 ease-in hover:bg-transparent border-pink-500' onClick={writeComment}>Sumbit</button>
       </div>
    </div>
  )
}

export default Comments
