import React from 'react';

// Sample data for bidders (minimum of 20 members)
const bidders = [
  { id: 1, companyAddress: '123 Main St, Cityville', walletAddress: '0xabc123...', bidAmount: 5000, deliveryDate: '2024-07-15' },
  { id: 2, companyAddress: '456 Elm St, Townsville', walletAddress: '0xdef456...', bidAmount: 4500, deliveryDate: '2024-07-20' },
  { id: 3, companyAddress: '789 Oak St, Villageville', walletAddress: '0xghi789...', bidAmount: 4800, deliveryDate: '2024-07-18' },
  { id: 4, companyAddress: '101 Pine St, Metropolis', walletAddress: '0xjkl012...', bidAmount: 4700, deliveryDate: '2024-07-22' },
  { id: 5, companyAddress: '202 Cedar St, Hamlet', walletAddress: '0xlmn345...', bidAmount: 4600, deliveryDate: '2024-07-19' },
  { id: 6, companyAddress: '303 Maple St, Smalltown', walletAddress: '0xopq678...', bidAmount: 4900, deliveryDate: '2024-07-17' },
  { id: 7, companyAddress: '404 Birch St, Bigcity', walletAddress: '0xrst901...', bidAmount: 4400, deliveryDate: '2024-07-21' },
  { id: 8, companyAddress: '505 Cherry St, Middletown', walletAddress: '0xuvw234...', bidAmount: 5200, deliveryDate: '2024-07-23' },
  { id: 9, companyAddress: '606 Walnut St, Springfield', walletAddress: '0xxyz567...', bidAmount: 5300, deliveryDate: '2024-07-24' },
  { id: 10, companyAddress: '707 Ash St, Uptown', walletAddress: '0xab1234...', bidAmount: 5400, deliveryDate: '2024-07-25' },
  { id: 11, companyAddress: '808 Poplar St, Downtown', walletAddress: '0xcd5678...', bidAmount: 5500, deliveryDate: '2024-07-26' },
  { id: 12, companyAddress: '909 Beech St, Suburbia', walletAddress: '0xef9012...', bidAmount: 5600, deliveryDate: '2024-07-27' },
  { id: 13, companyAddress: '1001 Pine St, Riverside', walletAddress: '0xgh3456...', bidAmount: 5700, deliveryDate: '2024-07-28' },
  { id: 14, companyAddress: '1102 Elm St, Lakeside', walletAddress: '0xij7890...', bidAmount: 5800, deliveryDate: '2024-07-29' },
  { id: 15, companyAddress: '1203 Oak St, Hillside', walletAddress: '0xkl1234...', bidAmount: 5900, deliveryDate: '2024-07-30' },
  { id: 16, companyAddress: '1304 Maple St, Countryside', walletAddress: '0xmn5678...', bidAmount: 6000, deliveryDate: '2024-07-31' },
  { id: 17, companyAddress: '1405 Cedar St, Cliffside', walletAddress: '0xop9012...', bidAmount: 6100, deliveryDate: '2024-08-01' },
  { id: 18, companyAddress: '1506 Birch St, Bayside', walletAddress: '0xqr3456...', bidAmount: 6200, deliveryDate: '2024-08-02' },
  { id: 19, companyAddress: '1607 Cherry St, Forestside', walletAddress: '0xst7890...', bidAmount: 6300, deliveryDate: '2024-08-03' },
  { id: 20, companyAddress: '1708 Walnut St, Seaside', walletAddress: '0xuv1234...', bidAmount: 6400, deliveryDate: '2024-08-04' },
];

// Sort bidders by bidAmount first and by deliveryDate second
bidders.sort((a, b) => {
  if (a.bidAmount === b.bidAmount) {
    return new Date(a.deliveryDate) - new Date(b.deliveryDate);
  }
  return a.bidAmount - b.bidAmount;
});

function Skills() {
  return (
    <div className='w-full md:pl-10 md:pr-10 flex flex-col justify-center items-center h-[100vh] overflow-scroll bg-gray-100'>
      <div className='flex justify-start items-center mb-8'>
        <h2 className='text-4xl text-green-700'>Fair E-Bidding: A Commitment to Integrity</h2>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-[90vh] bg-white p-8 rounded-lg shadow-lg mt-10'>
          <h3 className='text-2xl font-semibold mb-6 text-center p-20 fixed mt-5'>Leaderboard</h3>
          <ul>
            {bidders.map((bidder, index) => (
              <li key={bidder.id} className={`mb-4 p-4 border rounded-md shadow-md ${index === 0 ? 'border-yellow-500 bg-yellow-100' : 'border-gray-300'}`}>
                {index === 0 && <div className='text-center text-yellow-500 font-bold mb-2'>Leading Bidder</div>}
                <p className='text-lg'><strong>Company Address:</strong> {bidder.companyAddress}</p>
                <p className='text-lg'><strong>Wallet Address:</strong> {bidder.walletAddress}</p>
                <p className='text-lg'><strong>Bid Amount:</strong> ${bidder.bidAmount.toLocaleString()}</p>
                <p className='text-lg'><strong>Delivery Date:</strong> {new Date(bidder.deliveryDate).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
