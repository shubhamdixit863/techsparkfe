"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCard = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Software Development",
      description:
        "Learn the basics of React Hooks and how to use them in your projects.",
      img: "https://xdexairsoft.weebly.com/uploads/2/3/3/8/23383138/329772861.png?257",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      description:
        "Explore effective strategies for creating responsive web designs that look great on all devices.",
      img: "https://www.tatvasoft.com/blog/wp-content/uploads/2023/05/MERN-Stack-Architecture-1.jpg",
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className="container mx-auto p-8">
        <Slider {...settings}>
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-md shadow-md mb-6"
            >
              <img
                src={post.img}
                alt="blogImg"
                style={{ width: "100%", height: "auto" }}
              />
              <h2 className="text-xl font-bold mb-2 text-black">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.description}</p>
              <Link
                href="/blog/[id]"
                as={`/blog/${post.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-8 flex flex-wrap">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-md shadow-md mb-6 ms-2"
            style={{ flex: "0 0 48%" }}
          >
            <img
              src={post.img}
              alt="blogImg"
              style={{ width: "100%", height: "auto" }}
            />
            <h2 className="text-xl font-bold mb-2 text-black">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
            <Link
              href="/blog/[id]"
              as={`/blog/${post.id}`}
              className="text-blue-500 hover:underline mt-4 inline-block"
              onClick={() => console.log(`/blog/${post.id}`)}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default BlogCard;
