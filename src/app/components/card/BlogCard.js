
import React from "react";
import Link from "next/link";

const BlogCard = () => {
  const blogPosts = [
    {
      id: 1,
        title: "How To Start A Career in Software Development in 2024",
        description: "Discover the key steps and insights to kickstart your career in software development. Explore methodologies, languages, and tools for building scalable solutions.",
      img: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    },
    {
      id: 2,
      title: "Some Of The Popular Software Courses In India",
      description:
        "Discover sought-after software courses in India, spanning Full Stack Web Development, Data Science, Mobile App Development, Cloud Computing, Cybersecurity, and Artificial Intelligence. Acquire skills essential for diverse tech roles and industry demands.",
      img: "https://www.tatvasoft.com/blog/wp-content/uploads/2023/05/MERN-Stack-Architecture-1.jpg",
    },
    {
      id: 3,
      title: "Another Blog",
      description: "Description for another blog post.",
      img: "https://static.javatpoint.com/core/images/java-full-stack.png",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto md:p-8 md:w-4/5">
      <div className="grid grid-cols-2 md:gap-11 sm:gap blog_container">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="w-full"
          >
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src={post.img}
                alt="blogImg"
                className="mb-4 text-center img_blog" style={{height:"200px", width:"auto", backgroundColor:"red"}}
              />
              <h2 className="text-xl font-bold mb-2 text-black heading_card">{post.title}</h2>
              <p className="text-gray-700 text_card">{post.description}</p>
              <Link
                href="/blog/[id]"
                as={`/blog/${post.id}`}
                className="text-blue-500 hover:underline mt-4 inline-block"
                onClick={() => console.log(`/blog/${post.id}`)}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
