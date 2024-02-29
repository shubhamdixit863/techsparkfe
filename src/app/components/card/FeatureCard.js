"use client"
import React from 'react'
const FeatureCard = ({feature}) => {
    const { imageSrc, title, description } = feature;
  return (

<div className="md:mb-4 sm:mb-1  bg-slate-300 rounded-md common_card p-1 mx-1">
  <div className="card text-black rounded-md">
    <img
      src={imageSrc}
      className="card-img-top mx-auto d-block my-5 w-20 h-20 sm:w-10 sm:h-10 md:w-20 md:h-20 image_card"
      alt="Card Image"
      style={{ borderRadius: '50%', objectFit: 'cover' }}
    />
    <div className="card-body">
      <h5 className="card-title text-center font-semibold text-xs sm:text-base heading_card">{title}</h5>
      <p className="card-text text-center mt-2 mb-1 whitespace-pre-wrap text_card">{description}</p>
    </div>
  </div>
</div>


  )
}

export default FeatureCard