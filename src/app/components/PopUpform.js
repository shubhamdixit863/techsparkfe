
// PopUpForm.jsx
"use client";
import { useState } from 'react';
import { useClient } from 'next/react';
const PopUpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Full Name:', formData.fullName);
    console.log('Email:', formData.email);
    console.log('Mobile:', formData.mobile);

    // Close the modal after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Download Brochure</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="bg-[#2f80ed] text-white font-medium rounded-lg text-sm px-4 py-2 mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
