import React from 'react'
import './kesdecilik.css'
import Navbar from '../../Components/navBar/Navbar'
import Server from './../../server/Server.json'

const Kesdecilik = () => {
    return (
      <div>
          <Navbar/>
          <div className='flex my-2 h-96'>
  
              <div className='w-1/2 kesde-1  '>
                  <div className=' my-36 w-full mx-72 h-20 border-blue-600 bg-white rounded-lg'>
                      <p className='text-xl py-6 px-2 font-extrabold'>Keşdeçilik sungaty- Gymmatly Miras</p>
                  </div>
              </div>
  
              <div className='w-1/2 bg-white'>
                  {
                      Server.map(server => {
                          return(
                              <div key={server.id}>
                              <p className='text-sm mx-3 tracking-widest font-semibold my-2'>{server.kesde_1}</p>
                              </div>
                      )
                      })
                  }
                  
              </div>
          </div>
  
      
      
      
      
          <div className='my-6 flex h-96'>
              <div className='w-1/2 bg-white'>
              
              {
                  Server.map(server=>{
                      return(
                          <div key={server.id}>
                          <p className='font-semibold text-sm tracking-widest my-4 mx-4'>{server.kesde_2}</p>
                          </div>
                      )
                  })
              }
  
                  </div>
              <div className='w-1/2 bg-blue-600 second-image'> 
              <div className=' my-40 w-96  h-20 bg-blue-600 rounded-r-md '>
                      <p className='text-lg py-2.5 mx-16 text-white font-extrabold'>Türkmen keşdeçilik sungaty-Umamyadamzat mirasy</p>
                  </div>
                  </div>
                  </div>
  
  

                
                
                
                
                <div className='flex my-2 h-96'>

<div className='w-1/2 kesde-2  '>
    <div className=' my-36 w-full mx-56 h-20 border-blue-600 bg-white rounded-lg'>
        <p className='text-md py-4 px-2 font-black'>Türkmeniň “Keşdeçilik sungaty” UNESKO-nyň Bütindünýä <br /> mirasynyň sanawyna goşulmak üçin dalaşgär</p>
    </div>
</div>

<div className='w-1/2 bg-white'>
    {
        Server.map(server =>{
            return(
                <div key={server.id}>
                <p className='text-sm mx-4 tracking-widest font-semibold my-3'>{server.kesde_3} </p>
                </div>
            )
        })
    }
</div>
</div>




<div className='my-6 flex h-96'>
            <div className='w-1/2 bg-white'>
                {
                    Server.map(server=>{
                        return(
                            <div key={server.id}>
                            <p className='font-semibold text-sm tracking-widest my-4 mx-4'>{server.kesde_4}</p>
                            </div>
                        )
                    })
                }
                </div>
            <div className='w-1/2 bg-blue-600 third-image'> 
            <div className=' my-40 w-96  h-20 bg-blue-600 rounded-r-md '>
                    <p className='text-lg py-2.5 mx-16 text-white font-extrabold'>Türkmen keşdeçilik sungaty-Umamyadamzat mirasy</p>
                </div>
                </div>
                </div>

        </div>
  )
}

export default Kesdecilik