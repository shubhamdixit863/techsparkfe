"use client"
import React from 'react'
const FeatureCard = ({feature}) => {
    const { imageSrc, title, description } = feature;
  return (
    <div className=" mb-4 bg-slate-300 rounded-md common_card px-2">
    <div className="card text-black rounded-md">
      <img
        src={imageSrc}
        className="card-img-top mx-auto d-block my-5"
        alt="Card Image"
        style={{ borderRadius: '50%', width: '100px', height: '100px', textAlign: 'center' }}
      />
      <div className="card-body">
        <h5 className="card-title text-center font-semibold">{title}</h5>
        <p className="card-text mt-5 my-1 whitespace-pre-wrap">{description}</p>
      </div>
    </div>
  </div>
  )
}

export default FeatureCard