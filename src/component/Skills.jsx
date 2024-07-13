import React from 'react'
import Bidder from './form/Bidder'


function Skills() {
  return (
    <div className='w-full  md:pl-10 md:pr-10 flex flex-col justify-center items-center h-[100vh] overflow-scroll'>
    <div className='flex justify-start items-center'>
     {/* <img src={bidObord} alt="bider"  className='w-60 h-60 mb-20'/> */}
     <h2 className='text-4xl text-green-700'>Fair E-Bidding: A Commitment to Integrity</h2>
     </div>
  <div className='flex justify-center items-center'>
    <div className=' w-[90vh] '>
        <Bidder />
        </div>
      </div>
       
    </div>
    
  )
}

export default Skills