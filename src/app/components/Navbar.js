"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className="bg-white text-menu-gray sticky top-0">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">  
                    <Link href="/" >
                          
                                <Image src="/logoNew.png" alt="Brand Logo" width={128} height={64} /> {/* Adjust the width and height as needed */}
                           
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="text-menu-gray hover:text-black px-3 py-2 rounded-md text-sm font-medium">
               Home
            </Link>
            <Link href="/blog" className="text-menu-gray hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Blog
            </Link>

            <Link href="/course" className="text-menu-gray hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Courses
            </Link>
            <Link href="/about" className="text-menu-gray hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                About
            </Link>
         
                    </div>
                    <div className="hidden md:block">
                        <button className="text-menu-gray hover:text-black border-2 border-login-border px-3 py-2 rounded-md text-sm font-medium">Login</button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-menu-gray hover:bg-gray-100 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
              
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-menu-gray hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/blog" className="block text-menu-gray hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/course" className="block text-menu-gray hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Courses</Link>
            <Link href="#" className="block text-menu-gray hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Login</Link>
          </div>
                <div className="px-3 py-2">
                    <button className="block w-full text-menu-gray hover:text-black border-2 border-login-border px-3 py-2 rounded-md text-base font-medium">Login</button>
                </div>
            </div>
        </div>
       
<div className="announce-bar ps-1 md:text-sm lg:text-base">
  <p>Next batch starts on ⌛️ 2nd March. Hurry, limited seats left!</p>
</div>
      </>
    );
};

export default Navbar;
