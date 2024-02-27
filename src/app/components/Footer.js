"use client";
import React, { useState, useEffect } from "react";
// import PopUpForm from './PopUpForm'; // Assuming you have a PopUpForm component
import leftSectionContent from "../constant/footerText";
import "@fortawesome/fontawesome-free/css/all.css";
import PopUpForm from "./PopUpform";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState(
    "Empower your tech journey with TechSpark, where innovation meets expertise. We are a premier IT training institute, dedicated to shaping future tech leaders. Join us to acquire cutting-edge skills and unlock limitless possibilities in the world of technology"
  );
  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-8 px-4 md:flex md:justify-between">
        {/* Left Section*/}
        <div className="md:w-1/2 md:mb-0 mb-4 md:mx-auto text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-2">YOUR PATH FORWARD</h3>
          <p className="text-sm">{text}</p>
          <button
            className="bg-[#2f80ed] text-white font-medium rounded-lg text-sm px-4 py-2 mt-4 w-full md:w-auto mx-auto"
            onClick={openForm}
          >
            Download Brochure
          </button>
        </div>

        {/* Center Section (Links) */}
        <div className="md:w-1/4 md:mb-0 mb-4 md:mx-auto text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm md:mx-auto sm:text-center">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section (Contact & Social Media) */}
        <div className="md:w-1/4 md:mb-0 mb-4 md:mx-auto text-center sm:text-left text-white">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm mb-2 sm:text-xs">Email:contact@techsparkinnovations.com</p>
          <p className="text-sm mb-2 hover:text-blue-500 hover:underline">Phone: +91 70035 06971</p>
          <p className="text-sm  hover:text-blue-500 hover:underline">Phone: +91 98966 53821</p>
          {/* Social Media Links */}
          <div className="flex mt-4 justify-center items-center space-x-12">
            <a
              href="https://your-facebook-page-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="image/fb.svg"
                alt="Facebook Icon"
                className="text-white hover:text-blue-500 font-bold"
                style={{ marginRight: "0.5rem", height: "35px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/techsparkeducation?igsh=MWxxYTZvMWdiMGZoYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="image/insta.svg"
                alt="Facebook Icon"
                className="text-white hover:text-blue-500 font-bold invert"
                style={{ marginRight: "0.5rem", height: "35px" }}
              />
            </a>
            <a
              href="https://your-facebook-page-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="image/twitter.svg"
                alt="Facebook Icon"
                className="text-white hover:text-blue-500 font-bold"
                style={{ marginRight: "0.5rem", height: "35px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/techspark-education/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="image/linkedin.svg"
                alt="Facebook Icon"
                className="text-white hover:text-blue-500 font-bold"
                style={{ marginRight: "0.5rem", height: "35px" }}
              />
            </a>
          </div>
          {/* request a callback */}
          <div className="mb-6">
            <button
              className="text-white font-medium rounded-lg text-sm px-4 py-2 mt-4 w-full md:w-auto mx-auto outline"
              onClick={openForm}
            >
              <div className="flex flex-row gap-2 items-center justify-center text-center">
                <img
                  src="image/call.svg"
                  alt="Call Icon"
                  className="text-white hover:text-blue-500 font-bold invert"
                  style={{ height: "20px", marginBottom: "0.5rem" }}
                />
                <span>Request a Callback</span>
              </div>
            </button>
          </div>
          {/* get connect on whatsappp */}

          <div className="flex flex-row justify-center items-center fixed bottom-1">
            <a
              href="https://wa.me/917003506971"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <h2 className="text-gray-600 bg-gray-100 rounded-md p-2 me-3">
                Connect on WhatsApp
              </h2>
              <img
                src="image/whatsApp.svg"
                alt="WhatsApp Icon"
                className="text-white hover:text-blue-500 font-bold invert dance-icon"
                style={{ marginRight: "0.5rem", height: "40px" }}
              />
            </a>
          </div>

          <style jsx>{`
            @media (min-width: 768px) {
              .flex {
                justify-content: space-between;
              }
            }
          `}</style>
        </div>
      </div>

      {showForm && <PopUpForm onClose={closeForm} />}
    </footer>
  );
};

export default Footer;
