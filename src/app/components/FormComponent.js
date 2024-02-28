"use client";
import React, { useState } from 'react';
import axios from "axios";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("api-endpoint", formData);
      console.log("Submitted Data:", formData);
      // Clear the form data
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
      });
      console.log("Response from backend:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="max-w-md mx-auto my-10 bg-white p-4 sm:p-8 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
        Start learning for <span className="text-blue-600">FREE</span>
      </h2>
      <p className="text-sm text-gray-500 text-center mt-4">
        Lectures & Assignments curated by Top Tech Professionals
      </p>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            id="fullname"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm z-10"
          />
        </div>

        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <span>+91</span>
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            id="phonenumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm z-10"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Apply Now For Free
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By clicking ‘Apply Now For Free’, you agree to our{" "}
        <a href="#" className="text-blue-600 underline">
          Terms & Conditions
        </a>
      </p>
    </div>
  );
};
// FormComponent.__client = { static: true };

export default FormComponent;
