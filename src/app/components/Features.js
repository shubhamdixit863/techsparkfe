"use client";
import React, { useState } from "react";
import FeatureCard from "./card/FeatureCard";

const Features = () => {
  const [featureData] = useState([
    {
      imageSrc: "image/liveIn.jpg",
      title: "Engaging Live Sessions",
      description:
        "The trainer does not proceed to the next topic until all doubts are clear.",
    },
    {
      imageSrc: "image/practice.jpg",
      title: "Live Practice Sessions",
      description:
        "We guide you step-by-step to solve fundamental issues by sharing our screen.",
    },
    {
      imageSrc: "image/q&a.jpg",
      title: "Interactive Doubt Resolution Sessions",
      description:
        "For any assignment, share your screen to get instant support and clear doubts.",
    },
    {
      imageSrc: "image/mock.jpg",
      title: "Endless Mock Interviews",
      description:
        "Continuous practice with limitless opportunities for feedback.",
    },
  ]);

  return (
    <div className="container md:w-4/5 mx-auto mt-10 sm:w-full">
      <div
        className="text-center mt-1 text-2xl font-serif">
        Endless Reason To Choose Us
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-md">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
