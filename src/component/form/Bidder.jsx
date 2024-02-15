import React, { useState } from 'react'




function Bidder() {

  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    bidSubmissionDeadline: '',
    eligibilityCriteria: '',
    bidWithdrawal: '',
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
        {/* Company Information */}
   
       
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Project Details</h2>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Project Name"
            className="mb-4 w-full px-4 py-2 ring-2 bg-black ring-green-300 border rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={8}
            placeholder="Project Description"
            className="mb-4 w-full mt-2 ring-2 bg-black ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Bid Terms */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Bid Terms</h2>
          <textarea
            name="eligibilityCriteria"
            value={formData.eligibilityCriteria}
            onChange={handleChange}
            placeholder="Eligibility Criteria"
            className="mb-4 w-full px-4 ring-2 bg-black ring-green-300 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <input
            type="text"
            name="bidWithdrawal"
            value={formData.bidWithdrawal}
            onChange={handleChange}
            placeholder="Bid Withdrawal"
            className="mb-4 w-full mt-2 ring-2 bg-black ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Bid Submission Deadline */}
        <div className="mb-8">
          <label htmlFor="bidSubmissionDeadline" className="text-sm font-medium text-gray-600">
            Bid Submission Deadline
          </label>
          <input
            type="text"
            name="bidSubmissionDeadline"
            value={formData.bidSubmissionDeadline}
            onChange={handleChange}
            placeholder="Bid Submission Deadline"
            className="mb-4 w-full mt-2 ring-2 bg-black ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Eligibility Criteria */}
        <div className="mb-8">
          <label htmlFor="eligibilityCriteria" className="text-sm font-medium text-gray-600">
            Eligibility Criteria
          </label>
          <textarea
            name="eligibilityCriteria"
            value={formData.eligibilityCriteria}
            onChange={handleChange}
            placeholder="Eligibility Criteria"
            className="mb-4 w-full mt-2 ring-2 bg-black ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Bid Withdrawal */}
        <div className="mb-8">
          <label htmlFor="bidWithdrawal" className="text-sm font-medium text-gray-600">
            Bid Withdrawal
          </label>
          <input
            type="text"
            name="bidWithdrawal"
            value={formData.bidWithdrawal}
            onChange={handleChange}
            placeholder="Bid Withdrawal"
            className="mb-4 w-full mt-2 ring-2 bg-black ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>


        <div className='flex justify-between'>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black ring-2 mb-10 ring-green-900 text-white px-8 py-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Cancel
        </button>
        
          {/* Submit Button */}
          <button
          type="submit"
          className="bg-black ml-4 ring-2 mb-10 ring-green-500 text-white px-8 py-2 rounded hover:bg-green-900  focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Publish
        </button>
        </div>
      </form>
    </div>
  );
};
export default Bidder