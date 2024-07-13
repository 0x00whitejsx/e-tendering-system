import React from 'react'

function Navigation() {
  return (
    <div className='w-full  top-0 p-8 bg-g'>
        <div className='flex justify-between items-end'>
            <div>
              <p className='text-slate-400 font-bold invert-0'>ADBP-ES</p>
            </div>
            <div>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='/'> [ Home ]</a>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='Bid'> [ Bid ]</a>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='Projects'> [ view Bidder ]</a>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='Skills'> [ Open contract ]</a>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='Skills'> [ View  ]</a>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='Policy'> [ Policy  ]</a>
        <a className='p-5 text-lg text-green-700 hover:text-green-900' href='About'> [ About ]</a>
      
        </div>
        </div>
    </div>
  )
}

export default Navigation