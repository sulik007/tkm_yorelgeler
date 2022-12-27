import React from 'react'
import './middle.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function ScrollAnimation (){
  useEffect(() => {
    AOS.init({duration :1000});
  }, []); {
  return (
         <div className=' flex'>
           <div className='text text-6xl mx-20 my-auto font-bold ' data-aos='fade-up'>Türkmeniň Milli <br /> Däp-Dessurlary</div>
        <div className='left-side h-screen'></div>
        </div>
  )
}
}

export default ScrollAnimation