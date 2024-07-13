import React from 'react';
import bidObord from '../assets/team-onboarding.506972-10.svg';

// Sample data for bidders
const bidders = [
  { id: 1, name: 'John Doe', companyAddress: '123 Main St, Cityville', walletAddress: '0xabc123...', bidAmount: '$5000', deliveryDate: '2024-07-15' },
  { id: 2, name: 'Jane Smith', companyAddress: '456 Elm St, Townsville', walletAddress: '0xdef456...', bidAmount: '$4500', deliveryDate: '2024-07-20' },
  { id: 3, name: 'Michael Johnson', companyAddress: '789 Oak St, Villageville', walletAddress: '0xghi789...', bidAmount: '$4800', deliveryDate: '2024-07-18' },
];

function Bid() {
  return (
    <div className='w-full md:pl-10 md:pr-10 flex flex-col justify-center items-center'>
      <div className='flex justify-start items-center'>
        <img src={bidObord} alt="bidder" className='w-60 h-60 mb-20' />
        <h2 className='text-4xl text-green-700'>Fair E-Bidding: A Commitment to Integrity</h2>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-[90vh] border-2 border-green-700 h-[80vh] mt-50 p-20'>
          <h3 className='text-2xl font-semibold mb-4'>Bidders List</h3>
          <ul>
            {bidders.map(bidder => (
              <li key={bidder.id} className='mb-4'>
                <div className='p-4 border rounded-md shadow-md'>
                  <p><strong>Name:</strong> {bidder.name}</p>
                  <p><strong>Company Address:</strong> {bidder.companyAddress}</p>
                  <p><strong>Wallet Address:</strong> {bidder.walletAddress}</p>
                  <p><strong>Bid Amount:</strong> {bidder.bidAmount}</p>
                  <p><strong>Delivery Date:</strong> {bidder.deliveryDate}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bid;
