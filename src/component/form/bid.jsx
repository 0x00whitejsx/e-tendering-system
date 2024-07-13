import React, { useState } from 'react';

function Bid() {
  const [formData, setFormData] = useState({
    bidderWalletAddress: '',
    company: '',
    bidDescription: '',
    quantity: '',
    unitPrice: '',
    deliveryTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(formData);
    // Add further logic here, such as sending the data to a server
  };

  return (
    <div className="container mx-auto mt-8 h-[100vh]">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-green-200">
        <h1 className="text-2xl font-bold mb-4">BID SUBMISSION PAGE</h1>

        <div className="mb-8">
          <label htmlFor="bidderWalletAddress" className="text-sm font-medium text-gray-600">Bidder Wallet Address</label>
          <input
            type="text"
            name="bidderWalletAddress"
            value={formData.bidderWalletAddress}
            onChange={handleChange}
            placeholder="Bidder Wallet Address"
            className="mb-4 w-full px-4 py-2 ring-2 ring-green-300 border rounded focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="company" className="text-sm font-medium text-gray-600">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="mb-4 w-full mt-2 ring-2 ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="bidDescription" className="text-sm font-medium text-gray-600">Bid Description</label>
          <textarea
            name="bidDescription"
            value={formData.bidDescription}
            onChange={handleChange}
            rows={4}
            placeholder="Bid Description"
            className="mb-4 w-full mt-2 ring-2 ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <label htmlFor="quantity" className="text-sm font-medium text-gray-600">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="mb-4 w-full mt-2 ring-2 ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="unitPrice" className="text-sm font-medium text-gray-600">Unit Price</label>
          <input
            type="text"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            placeholder="Unit Price"
            className="mb-4 w-full mt-2 ring-2 ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="deliveryTime" className="text-sm font-medium text-gray-600">Delivery Time (Days)</label>
          <input
            type="text"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            placeholder="Delivery Time (Days)"
            className="mb-4 w-full mt-2 ring-2 ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className='flex justify-between'>
          <button
            type="button"
            className="bg-black ring-2 mb-10 ring-green-900 text-white px-8 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black ml-4 ring-2 mb-10 ring-green-500 text-white px-8 py-2 rounded hover:bg-green-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-black ml-4 ring-2 mb-10 ring-red-500 text-white px-8 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Withdraw
          </button>
        </div>
      </form>
    </div>
  );
}

export default Bid;
