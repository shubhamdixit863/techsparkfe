"use client";
import React, { useState, useEffect } from "react";
// import leftSectionContent from "../constant/footerText";
import "@fortawesome/fontawesome-free/css/all.css";
import PopUpForm from "./PopUpform";
import Link from "next/link";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState(
    "Empower your tech journey with eduyogi, where innovation meets expertise. We are a premier IT training institute, dedicated to shaping future tech leaders. Join us to acquire cutting-edge skills and unlock limitless possibilities in the world of technology"
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
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/4 md:mb-0 mb-4 md:mx-auto text-center sm:text-left">
            <h3 className="text-center text-2xl text-blue-500 font-bold md:mb-4">
              YOUR PATH FORWARD
            </h3>
            <p className="text-sm">{text}</p>
            <button
              className="bg-[#2f80ed] text-white font-medium rounded-lg text-sm px-4 py-2 mt-4 w-full md:w-auto mx-auto"
              onClick={openForm}
            >
              Download Brochure
            </button>
          </div>
          {/* course section */}
          <div className="md:w-1/4 w-full md:mb-0 mb-4 mx-auto md:mx-0 text-center sm:text-left md:ms-4 ">
            <h1 className="text-2xl text-blue-500 font-bold md:mb-4 text-center">
              Courses
            </h1>
            <ul className="space-y-2 course text-center footer_child">
              <li className="flex gap-2 hover:underline hover:text-blue-700 hover:cursor-pointer text-center">
                <span>
                  <img className="invert" src="image/full.svg" alt="" />
                </span>
                MERN STACK
              </li>
              <li className="flex gap-2 hover:underline hover:text-blue-700 hover:cursor-pointer">
                <span>
                  <img
                    className="invert"
                    src="image/java.svg"
                    alt=""
                    style={{ height: "20px", color: "white" }}
                  />
                </span>
                JAVA FULL STACK
              </li>
              <li className="flex gap-2 hover:underline hover:text-blue-700 hover:cursor-pointer">
                <span>
                  <img
                    className="invert"
                    src="image/code.svg"
                    alt=""
                    style={{ height: "20px" }}
                  />
                </span>
                Software Development
              </li>
            </ul>
          </div>

          {/* </div> */}

          {/* Center Section (Links) */}
          <div className="md:w-1/4 md:mb-0 mb-4 md:mx-auto text-center sm:text-left ">
            <h3 className="text-center text-2xl text-blue-500 font-bold md:mb-4">
              Links
            </h3>
            <ul className="space-y-2 footer_child">
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-blue-300 hover:underline  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-blue-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section (Contact & Social Media) */}
          <div className="md:w-1/4 md:mb-0 mb-4 md:mx-auto text-center sm:text-left text-white">
            <h3 className="text-center text-2xl text-blue-500 font-bold md:mb-4">
              Contact Us
            </h3>
            <ul className="text-center footer_child">
              <li>
                <p className="text-sm hover:text-blue-500 hover:underline">
                  Phone: +91 98966 53821
                </p>
              </li>
            </ul>

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
                href="https://www.instagram.com/eduyogieducation?igsh=MWxxYTZvMWdiMGZoYg=="
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
                href="https://www.linkedin.com/company/eduyogi-education/"
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
                href="https://wa.me/919896653821"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <h2 className="text-slate-50 bg-slate-600 rounded-md p-2 me-3">
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
      </div>
      {showForm && <PopUpForm onClose={closeForm} />}
    </footer>
  );
};

export default Footer;
