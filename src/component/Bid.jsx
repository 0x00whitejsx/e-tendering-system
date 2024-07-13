import React from 'react'

import bidObord from '../assets/team-onboarding.506972-10.svg'

function Bid() {
  return (
    <div className='w-full  md:pl-10 md:pr-10 flex flex-col justify-center items-center'>
        <div className='flex justify-start items-center'>
         <img src={bidObord} alt="bider"  className='w-60 h-60 mb-20'/>
         <h2 className='text-4xl text-green-700'>Fair E-Bidding: A Commitment to Integrity</h2>
         </div>
      <div className='flex justify-center items-center'>
        <div className='w-[90vh] border-2 border-green-700 h-[80vh] mt-50 p-20'>
    
        </div>
      </div>
       
    </div>
  )
}

export default Bid