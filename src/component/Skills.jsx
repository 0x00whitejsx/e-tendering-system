import React from 'react';

// Sample data for bidders (minimum of 20 members)
const bidders = [
  { id: 1, name: 'John Doe', companyAddress: '123 Main St, Cityville', walletAddress: '0xabc123...', bidAmount: '$5000', deliveryDate: '2024-07-15' },
  { id: 2, name: 'Jane Smith', companyAddress: '456 Elm St, Townsville', walletAddress: '0xdef456...', bidAmount: '$4500', deliveryDate: '2024-07-20' },
  { id: 3, name: 'Michael Johnson', companyAddress: '789 Oak St, Villageville', walletAddress: '0xghi789...', bidAmount: '$4800', deliveryDate: '2024-07-18' },
  { id: 4, name: 'Alice Brown', companyAddress: '101 Pine St, Metropolis', walletAddress: '0xjkl012...', bidAmount: '$4700', deliveryDate: '2024-07-22' },
  { id: 5, name: 'Bob White', companyAddress: '202 Cedar St, Hamlet', walletAddress: '0xlmn345...', bidAmount: '$4600', deliveryDate: '2024-07-19' },
  // Add more members to make it at least 20
  { id: 6, name: 'Charlie Black', companyAddress: '303 Maple St, Smalltown', walletAddress: '0xopq678...', bidAmount: '$4900', deliveryDate: '2024-07-17' },
  { id: 7, name: 'Diana Green', companyAddress: '404 Birch St, Bigcity', walletAddress: '0xrst901...', bidAmount: '$4400', deliveryDate: '2024-07-21' },
  { id: 8, name: 'Eve Blue', companyAddress: '505 Cherry St, Middletown', walletAddress: '0xuvw234...', bidAmount: '$5200', deliveryDate: '2024-07-23' },
  { id: 9, name: 'Frank Yellow', companyAddress: '606 Walnut St, Springfield', walletAddress: '0xxyz567...', bidAmount: '$5300', deliveryDate: '2024-07-24' },
  { id: 10, name: 'Grace Purple', companyAddress: '707 Ash St, Uptown', walletAddress: '0xab1234...', bidAmount: '$5400', deliveryDate: '2024-07-25' },
  { id: 11, name: 'Hank Red', companyAddress: '808 Poplar St, Downtown', walletAddress: '0xcd5678...', bidAmount: '$5500', deliveryDate: '2024-07-26' },
  { id: 12, name: 'Ivy Orange', companyAddress: '909 Beech St, Suburbia', walletAddress: '0xef9012...', bidAmount: '$5600', deliveryDate: '2024-07-27' },
  { id: 13, name: 'Jack Gray', companyAddress: '1001 Pine St, Riverside', walletAddress: '0xgh3456...', bidAmount: '$5700', deliveryDate: '2024-07-28' },
  { id: 14, name: 'Kate Silver', companyAddress: '1102 Elm St, Lakeside', walletAddress: '0xij7890...', bidAmount: '$5800', deliveryDate: '2024-07-29' },
  { id: 15, name: 'Leo Gold', companyAddress: '1203 Oak St, Hillside', walletAddress: '0xkl1234...', bidAmount: '$5900', deliveryDate: '2024-07-30' },
  { id: 16, name: 'Mona Pink', companyAddress: '1304 Maple St, Countryside', walletAddress: '0xmn5678...', bidAmount: '$6000', deliveryDate: '2024-07-31' },
  { id: 17, name: 'Nick Cyan', companyAddress: '1405 Cedar St, Cliffside', walletAddress: '0xop9012...', bidAmount: '$6100', deliveryDate: '2024-08-01' },
  { id: 18, name: 'Olga Lime', companyAddress: '1506 Birch St, Bayside', walletAddress: '0xqr3456...', bidAmount: '$6200', deliveryDate: '2024-08-02' },
  { id: 19, name: 'Paul Violet', companyAddress: '1607 Cherry St, Forestside', walletAddress: '0xst7890...', bidAmount: '$6300', deliveryDate: '2024-08-03' },
  { id: 20, name: 'Quinn Teal', companyAddress: '1708 Walnut St, Seaside', walletAddress: '0xuv1234...', bidAmount: '$6400', deliveryDate: '2024-08-04' },
];

function Skills() {
  return (
    <div className='w-full md:pl-10 md:pr-10 flex flex-col justify-center items-center h-[100vh] overflow-scroll'>
      <div className='flex justify-start items-center'>
        <h2 className='text-4xl text-green-700'>Fair E-Bidding: A Commitment to Integrity</h2>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-[90vh]'>
          <h3 className='text-2xl font-semibold mb-4'>Leaderboard</h3>
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

export default Skills;
