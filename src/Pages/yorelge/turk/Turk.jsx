import React from 'react'
import Navbar from '../../../Components/navBar/Navbar'
import Server from './../../../server/Server.json'
import turk from './../../../assets/turk.png'


const Turk = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-36 bg-blue-600'>
          <div className='text-lg text-white font-semibold px-80 py-11'>
          TÜRKMENISTANYŇ PREZIDENTINIŇ «TÜRKMENIŇ DÖWLETLILIK ÝÖRELGESI» KITABYNYŇ TÜRK DILINDÄKI TANYŞDYRYLYŞ DABARASY
        </div>
        <div className='flex bg-white mx-2.5 my-2 rounded-xl'>
         <img src={turk} alt="surat" className=' rounded-3xl mx-2 w-1/3 h-96 ' />
         
         
         {
          Server.map(server => {
            return(
              <div key={server.id}>
              <p className='font-semibold text-sm text-black mx-1  my-1 tracking-widest'>{server.turk}</p>
               </div>
         
         )})}


         </div>
       </div>
    </div>
  )
}

export default Turk
