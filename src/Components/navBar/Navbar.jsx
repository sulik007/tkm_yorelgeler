import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import culture2 from '../../assets/culture2.png'




const Navbar = () => {
  return (
    <div className='navbar w-full grid grid-cols-2 h-28 shadow-lg bg-white'>
      <Link to={'/'}>
        <div className='logo my-6 mx-12 text-xl text-blue-600 font-black'><img src={culture2} alt="culture" className='w-28' /></div>
        </Link>
  
       <div className='header space-x-5 mx-36 flex my-auto  font-bold'>
       <Link to={'/yorelge'}> 
       <div className='hover:text-blue-600 cursor-pointer'>Ýörelge</div>
       </Link>
        
        <Link to={'/kesdecilik'}>
        <div className='hover:text-blue-600 cursor-pointer'>Keşdeçilik</div>
        </Link>

        
        <Link to={'/toy'}>
        <div className='hover:text-blue-600 cursor-pointer'>Toý däbi</div>
        </Link>
  
        <Link to={'/beylekiler'}>
        <div className='hover:text-blue-600 cursor-pointer'>Beýlekiler</div>
        </Link>
       </div>

    </div>
  )
}

export default Navbar
