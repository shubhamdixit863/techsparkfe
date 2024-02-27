// CoursesScrollArea.js

"use client";
import CourseCard from "./CourseCard";
import { useRef } from "react";

const courses = [
  {
    id: 1,
    name: "MERN Stack Week Days",
    description:
      "Master MERN stack on weekdays, 7-8:30 PM. Accelerate your skills. Enroll for a dynamic, flexible learning experience. Transform your tech journey!",
    duration: "8 Month",
    seat: 20,
  },
  {
    id: 2,
    name: "MERN Stack Weekend",
    description:
      "Embark on a transformative weekend learning adventure with our MERN stack development course. Dive into immersive sessions every Saturday and Sunday from 8:00 PM - 10:00 PM. Enroll now for quality learning with flexibility",
    duration: "7 Month",
    seat: 30,
  },
  // Add more courses as needed
];

const CoursesScrollArea = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="container flex flex-col items-center my-10">
      <div className="scroll-container" ref={scrollContainerRef}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="buttons">
        <button onClick={scrollLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#2f80ed]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={scrollRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#2f80ed]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        .scroll-container {
          display: flex;
          overflow-x: scroll;
          scrollbar-width: thin;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          width: 100%; 
          scroll-behavior: smooth; 
        }

        .scroll-container > :global(div) {
          flex: 0 0 auto;
          scroll-snap-align: start;
          margin-right: 16px;
        }

        .buttons {
          display: flex;
          margin-top: 4px;
        }

        button {
          background-color: white;
          padding: 8px;
          border-radius: 50%;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          margin-right: 4px;
        }

        @media screen and (max-width: 600px) {
          .scroll-container {
            overflow-x: hidden;
            scroll-snap-type: none; 
            width: 100%; 
            overflow: auto;
            -webkit-overflow-scrolling: touch; 
          }

          .scroll-container > :global(div) {
            margin-right: 0; 
          }

          /* Add more mobile-specific styles if needed */
        }
      `}</style>
    </div>
  );
};

export default CoursesScrollArea;
