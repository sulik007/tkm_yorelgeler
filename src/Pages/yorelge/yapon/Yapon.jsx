import React from 'react'
import Navbar from '../../../Components/navBar/Navbar'
import Server from './../../../server/Server.json'
import yapon from './../../../assets/yapon.png'


const Yapon = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-36 bg-blue-600'>
          <div className='text-lg text-white font-semibold px-72 py-11'>
          Milli Liderimiziň «Türkmeniň döwletlilik ýörelgesi»  atly kitaby ýapon dilinde neşir edildi
        </div>
        <div className='flex bg-white mx-2.5 my-9 rounded-xl'>
         <img src={yapon} alt="surat" className='mx-2 rounded-3xl w-1/3 h-96 ' />
         
         
         {
          Server.map(server => {
            return(
              <div key={server.id}>
              <p className='font-semibold text-sm text-black mx-1 my-4 tracking-widest'>{server.yapon}</p>
               </div>
            )})}
        
        
         </div>
       </div>
    </div>
  )
}

export default Yapon
