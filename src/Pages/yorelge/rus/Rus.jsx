import React from 'react'
import Navbar from '../../../Components/navBar/Navbar'
import Server from './../../../server/Server.json'
import rus from './../../../assets/rus.png'


const Rus = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-36 bg-blue-600'>
          <div className='text-lg text-white font-semibold px-80 py-11'>
        AŞGABATDA TÜRKMENISTANYŇ PREZIDENTINIŇ «TÜRKMENIŇ DÖWLETLILIK ÝÖRELGESI» <br /> ATLY  KITABYNYŇ RUS DILINDÄKI NEŞIRINIŇ TANYŞDYRYLYŞ DABARASY GEÇIRILDI
        </div>
        <div className='flex bg-white mx-2.5 my-2 rounded-xl'>
        <img src={rus} alt="surat" className=' rounded-3xl mx-2 w-1/3 h-96 ' />   
  
          {
            Server.map(server => {
              return (
                <div key={server.id}>     
         <p className='font-semibold text-sm text-black mx-1 my-p2 tracking-widest'>{server.rus}</p>
         </div>
        )})}
        
        
        
         </div>
       </div>
    </div>
  )
}

export default Rus
