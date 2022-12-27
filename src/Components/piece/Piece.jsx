import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function ScrollAnimation ({name, image}) {
  useEffect(() => {
    AOS.init({duration :1000});
  }, []);
  return (  
          
    
        <div className='' data-aos='fade-up'>
        <div className='hover:scale-105 transition duration-100 ease-in-out flex w-full hover:shadow-xl hover:duration-700  h-52 bg-white shadow-sm '>
            <img className='mx-2 my-2 w-56' src={image} alt="surat" />
            <div className='text-md font-bold text-black mx-12 hover:text-blue-600 cursor-pointer my-auto'>{name}</div>
        </div>
    </div>
       
    
  )
}


export default ScrollAnimation