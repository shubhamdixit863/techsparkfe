import React from 'react';

const FormComponent = () => {
  return (
    <div className="max-w-md mx-auto my-10 bg-white p-4 sm:p-8 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">Start learning for <span className="text-blue-600">FREE</span></h2>
      <p className="text-sm text-gray-500 text-center mt-4">Lectures & Assignments curated by Top Tech Professionals</p>

      <form className="mt-8 space-y-6">
        <div className="mb-4">
          <input type="text" placeholder="Full Name" id="fullname" name="fullname"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"/>
        </div>
        <div className="mb-4 relative">
          <select
              className="appearance-none h-full py-2 border-transparent bg-transparent pl-3 pr-8 rounded text-gray-500 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>+91</option>
              {/* Add other country codes here */}
          </select>
          <input type="phone" placeholder="Phone Number" id="phonenumber" name="phonenumber"
              className="w-full pl-16 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"/>
        </div>
        <button type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Apply Now For Free
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
          By clicking ‘Apply Now For Free’, you agree to our <a href="#" className="text-blue-600 underline">Terms & Conditions</a>
      </p>
    </div>
  )
}

export default FormComponent;
