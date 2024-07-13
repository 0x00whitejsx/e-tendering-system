import React, { useState } from 'react';

function Bidder() {
  const [formData, setFormData] = useState({
    tenderNo: '',
    tenderDescription: '',
    evaluationCriteria: '',
    submissionDeadline: '',
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
      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-green-900">
        <h1 className="text-2xl font-bold mb-4">BID CREATION PAGE</h1>

        <div className="mb-8">
          <label htmlFor="tenderNo" className="text-sm font-medium text-gray-600">Tender No</label>
          <input
            type="text"
            name="tenderNo"
            value={formData.tenderNo}
            onChange={handleChange}
            placeholder="Tender No"
            className="mb-4 w-full px-4 py-2 ring-2 ring-green-300 border rounded focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="tenderDescription" className="text-sm font-medium text-gray-600">Tender Description</label>
          <textarea
            name="tenderDescription"
            value={formData.tenderDescription}
            onChange={handleChange}
            rows={8}
            placeholder="Tender Description"
            className="mb-4 w-full mt-2 ring-2 ring-green-300 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <label htmlFor="evaluationCriteria" className="text-sm font-medium text-gray-600">Evaluation Criteria</label>
          <textarea
            name="evaluationCriteria"
            value={formData.evaluationCriteria}
            onChange={handleChange}
            placeholder="Evaluation Criteria"
            className="mb-4 w-full px-4 ring-2 ring-green-300 py-2 border rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <label htmlFor="submissionDeadline" className="text-sm font-medium text-gray-600">Submission Deadline</label>
          <input
            type="text"
            name="submissionDeadline"
            value={formData.submissionDeadline}
            onChange={handleChange}
            placeholder="Submission Deadline"
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
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Bidder;
