import { ExternalLink } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Schools = () => {

   // schools
   const schoolList = [
    {
        id: 1,
        name: 'სკოლა გრაალი - school graali',
        img: 'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-1/316816069_806912590376514_1142526723732032899_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3touzQD5ihYAb5s0p3U&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCsoyexFtgX5NCq3-_J6GbrwB91TRKHhqSceTko4juwVQ&oe=66282F25'
    },

    {
        id: 2,
        name: 'სკოლა ფენიქსი',
        img: 'https://cdn.08.ge/logos/org_5e73227ba387c.jpg'
    },

    {
        id: 3,
        name: 'სკოლა ერუდიტი/ School Eruditi ',
        img: 'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-1/305218107_580723597087502_5948782435499956860_n.jpg?stp=c4.0.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bgNjfYwAPXsAb4ydNUj&_nc_ht=scontent.fkut1-1.fna&oh=00_AfDeOKCSfX5KA3GA8xt3VTBImTuW9MQxdS82Vpy30fRUHg&oe=662817FC'
    },

    {
        id: 4,
        name: 'მწვანე სკოლა',
        img: 'https://greenschool.ge/wp-content/uploads/2022/12/mtsvaneskola-logo-02-scaled-e1672307568488.jpg'
    },

    {
        id: 5,
        name: 'კერძო სკოლა ინტელექტი',
        img: 'data:image/png;base64,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'
    },



   ]




  return (
    <div className='p-12 w-3/5'>
        <h1 className='text-4xl font-semibold'>აირჩიე სკოლა</h1>
        <div className='flex flex-wrap '>

     
        {schoolList.map((value) => (
          
   <div className='flex flex-col items-center gap-4 p-12' key={value.id}>
   <h2 className='text-2xl'>{value.name}</h2>
   <img className='w-64 shadow-lg duration-500 ease-in hover:opacity-50 cursor-pointer h-64 object-cover'    src = {value.img} />
     <Link className='flex gap-4 text-[#864AF9] font-semibold' to = {`/profile/schools/${value.id}`}>
     იხილეთ სრულად
     <ExternalLink />
     </Link>
</div>

        ))}
        </div>
      

      
    </div>


  )
}

export default Schools
