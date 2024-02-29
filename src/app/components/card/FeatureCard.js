"use client"
import React from 'react'
const FeatureCard = ({feature}) => {
    const { imageSrc, title, description } = feature;
  return (

<div className="md:mb-4 sm:mb-1 sm:text-xs bg-slate-300 rounded-md common_card p-1 mx-1">
  <div className="card text-black rounded-md">
    <img
      src={imageSrc}
      className="card-img-top mx-auto d-block my-2"
      alt="Card Image"
      style={{ borderRadius: '50%', width: '50px', height: '50px', textAlign: 'center' }}
    />
    <div className="card-body">
      <h5 className="card-title text-center font-semibold text-xs">{title}</h5>
      <p className="card-text text-center sm:text-xs mt-2 mb-1 whitespace-pre-wrap">{description}</p>
    </div>
  </div>
</div>

  )
}

export default FeatureCard