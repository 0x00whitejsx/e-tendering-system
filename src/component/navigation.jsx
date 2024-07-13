import React from 'react';

function Navigation() {
  return (
    <div className='w-full top-0 p-8 bg-gray-800'>
        <div className='flex justify-between items-end'>
            <div>
              <p className='text-white font-bold'>ADBP-ES</p>
            </div>
            <div className='flex space-x-5'>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/' aria-label='Home'>[ Home ]</a>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/Bid' aria-label='Bid'>[ Bid ]</a>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/Projects' aria-label='View Bidder'>[ View Bidder ]</a>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/OpenContract' aria-label='Open Contract'>[ Open Contract ]</a>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/View' aria-label='View'>[ View ]</a>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/Policy' aria-label='Policy'>[ Policy ]</a>
              <a className='text-lg text-white font-bold hover:text-green-400' href='/About' aria-label='About'>[ About ]</a>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
