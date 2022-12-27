import React from 'react'
import './toy.css'
import Navbar from '../../Components/navBar/Navbar'
import { TypeAnimation } from 'react-type-animation'
import toy from './../../assets/toy.png'
import Server from './../../server/Server.json'

const Toy = () => {
  return (
    <div>
      <Navbar/>
      <div className=' h-60 w-full first'></div>
      
      
  
      <div className='w-full h-48 bg-white shadow-md'>
          <p className='font-semibold mx-96 text-blue-600 text-3xl py-20'>
            <TypeAnimation
              sequence={[
                'Agysyz ölüm bolmaz, öýkesiz — toý ',
                1000,
                'Ne hamyr, ne petir, ne toýa ýarar, ne ýasa ', 
                1000,
                'Nanyny aýan aşa ýeter, daňyny aýan — toýa  ',
                1000,
                'Her işiň haýry ýagşydyr, toýun gelşigi bagşydyr ',
                1000,
                'Toý – göwün baharydyr.',
                1000,
                'Uruş-söweş – yzan-da çuwanlygyň ýeri. Toý-şagalaň – şatlygyň ýeri.'
                
              ]}

              wrapper="div"
              cursor={true}
              repeat={Infinity}
              /></p>
      </div>

      <div className=' w-full second h-60 '></div>

      <div className='flex mt-20 bg-white shadow-lg'>
        <div className='w-1/2 bg-white'>
          {
            Server.map(server=> {
              return(
                <div key={server.id}>
                <p className='text-md mx-6 my-3 font-semibold'>{server.toy_1}</p>
                </div>
              )
            })
          }
         
        </div>
        <div className=' bg-blue-500 wedding h-80'>
         <p className='font-semibold text-3xl my-32 mx-52 text-black'>Türkmeniň gelin toýy</p>
        </div>
      </div>

      <div className='bg-white mt-20 flex h-96 shadow-lg'>
        {
          Server.map(server=>{
            return(
              <div className='text-md font-semibold  my-5'>{server.toy_2} </div>
            )
          })
        }
        <img className='' src={toy} alt="toy" />
      </div>

  
      </div>

  )
}

export default Toy




