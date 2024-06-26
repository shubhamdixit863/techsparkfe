"use client"
import React, { useEffect, useState } from 'react'

const TopPart = () => {
    const [fade, setFade] = useState(false);
    const [text, setText] = useState([
      {
        "banner_heading": "Welcome to eduyogi - Igniting Innovation, Empowering Futures!",
        "banner_text": "At eduyogi, we're not just a platform; we're a community of tech enthusiasts, learners, and innovators. Our mission is to fuel the flame of curiosity and empower individuals to embrace the ever-evolving world of technology."
      }
    ]);
  
    useEffect(() => {
      setFade(true);
    }, []);
  
    return (

<div className={`home_section_top flex pt-4 pb-36 bg-gray-500 fade-in-text ${fade ? 'fade-in' : ''}`}>
  <div className='left text-black flex-1 text-center md:text-left'>
    <h1 className='text-4xl font-bold pt-7 md:ms-20'>{text[0].banner_heading}</h1>
    <p className='text-justify ms-5 me-5 mt-5 text-white'>{text[0].banner_text}</p>
  </div>
  <div className='right flex-1 text-center md:text-left'>
    <img className='mx-auto md:float-right md:me-20' src='/image/liveIn.jpg' alt='' style={{ height: "300px", width: "350px" }} />
  </div>
</div>

    );
  };
  

export default TopPart
