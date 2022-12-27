import React from 'react';
import Navbar from '../../Components/navBar/Navbar'
import Piece from '../../Components/piece/Piece'
import { Link } from 'react-router-dom';
import data from '../../data/data';
import './yorelge.css'

 

function Yorelge  () {

  return (
    <div>
      <Navbar/>
    <div className='main h-96'>
      <div className='py-20'>
       <div className='font-bold text-5xl h-20 bg-white px-72 py-3 text-black'>«Zähmet adamy adam edýär!»</div>
       </div>
    </div>
   <div className='grid space-y-3'>

    <Link to='/arap'>
      <div className='mr-96 mx-3'>
    <Piece name={data[0].name} image={data[0].image} />
    </div>
    </Link>


    <Link to='/rus'>
      <div className='ml-96 mx-3'>
    <Piece name={data[1].name} image={data[1].image} />
    </div>
    </Link>
    
    <Link to='/turk'>
    <div className='mr-96 mx-3'>
    <Piece name={data[2].name} image={data[2].image} />
    </div>
    </Link>

    <Link to='/yapon'>  
    <div className='ml-96 mx-3'>
    <Piece name={data[3].name} image={data[0].image} />
     </div>
    </Link>


    <Link to='/ozbek'>
    <div className='mr-96 mx-3'>
    <Piece  name={data[4].name} image={data[4].image}/>
     </div>
    </Link>

    </div>  
    </div>
 
 )
}

export default Yorelge
