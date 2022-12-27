import React from 'react'
import Navbar from '../../../Components/navBar/Navbar'
import Server from './../../../server/Server.json'
import arap from './../../../assets/arap.png'




const Arap = () => {
  return(
    <div>
        <Navbar />
        <div className='w-full h-36 bg-blue-600'>
          <div className='text-lg text-white font-semibold px-80 py-11'>
          TÜRKMENISTANYŇ PREZIDENTINIŇ «TÜRKMENIŇ DÖWLETLILIK ÝÖRELGESI» ATLY KITABYNYŇ ARAP DILINDÄKI NEŞIRINIŇ TANYŞDYRYLYŞ DABARASY GEÇIRILDI
        </div>  
            <div className='flex bg-white mx-2.5 my-2 rounded-xl'>
            <img src={arap} alt="surat" className=' rounded-3xl w-1/3 h-96 mx-2 ' />
         
         {
            Server.map(server => {
              return(
         <div key={server.id}>
         
         <p className='font-semibold text-sm text-black mx-1 my-3 tracking-widest'>{server.arap}</p>
         </div>
              
              )})}


         </div>
       </div>
    </div>
  )
  
}

export default Arap
