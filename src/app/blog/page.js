// src/pages/BlogPage.js
"use client"

import { useState } from "react";
import BlogCard from "../components/card/BlogCard";

const BlogPage = () => {
    const [content] = useState({
        welcome: "Welcome to TechSpark Blog",
        intro: "Discover the latest in technology and stay informed with our insightful blog posts. TechSpark brings you a diverse range of articles, tutorials, and discussions covering various aspects of the tech world.",
        topics: [
          "Programming & Coding: Dive into the world of coding with tips, tricks, and in-depth guides.",
          "Web Development: Stay updated on the latest trends and best practices in web development.",
          "Data Science: Explore the data-driven world and learn about data science methodologies.",
          "Cybersecurity: Enhance your knowledge of cybersecurity and keep your digital world secure.",
          "AI & Machine Learning: Delve into the fascinating realms of artificial intelligence and machine learning."
        ],
        whyChoose: "Our team of experts is passionate about technology and dedicated to delivering high-quality content. Whether you're a seasoned professional or a tech enthusiast, our blog has something for everyone.",
        stayConnected: "Visit our blog regularly for fresh insights, practical advice, and exciting discoveries in the ever-evolving tech landscape. Enhance your skills, stay informed, and join us on the journey of technological exploration."
      });
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* <h1 className="text-3xl font-bold text-[#2f80ed] mb-8">Blog</h1> */}
            <div className="bg-slate-800 text-white py-5 mt-0 mb-4">
                <h2 className="text-white text-center text-2xl font-bold mb-2">{content.welcome}</h2>
                <p className="text-center text-slate-300 mx-auto">{content.intro}</p>
                <h2 className="text-2xl font-bold mb-4 ms-5 mt-2">Explore Topics Such As:</h2>
                <ul className="list-disc ml-6">
        {content.topics.map((topic, index) => (
          <li key={index} className=" text-white mb-2">{topic}</li>
        ))}
      </ul>
            </div>
            <div className="flex">
                <BlogCard />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Article 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png" alt="Article 1" className="w-full h-56 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-lg font-bold text-[#2f80ed] mb-2">Article Title 1</h2>
                        <p className="text-gray-600 text-sm mb-4">By Author Name | Date</p>
                        <p className="text-gray-700">Summary of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="text-[#2f80ed] font-medium mt-2 inline-block">Read More</a>
                    </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png" alt="Article 2" className="w-full h-56 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-lg font-bold text-[#2f80ed] mb-2">Article Title 2</h2>
                        <p className="text-gray-600 text-sm mb-4">By Author Name | Date</p>
                        <p className="text-gray-700">Summary of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="text-[#2f80ed] font-medium mt-2 inline-block">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
