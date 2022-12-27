import React from 'react'
import Navbar from '../../../Components/navBar/Navbar'
import Server from "./../../../server/Server.json"
import ozbek from './../../../assets/ozbek.png'


const Ozbek = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-36 bg-blue-600'>
          <div className='text-lg text-white font-semibold px-80 py-11'>
          Milli Liderimiziň “Türkmeniň döwletlilik ýörelgesi” kitaby özbek dilinde neşir edildi
        </div>
        <div className='flex bg-white mx-2.5 my-9 rounded-xl'>
         <img src={ozbek} alt="surat" className=' rounded-3xl w-1/3 h-96 mx-2 ' />
         
         
         
         {
          Server.map(server=> {
            return (
              <div key={server.id}>
              <p className='font-semibold text-sm text-black my-5 mx-0.5 tracking-widest'>{server.ozbek}</p>
              </div>
         
         )})}
        
        
         </div>
       </div>
    </div>
  )
}

export default Ozbek
