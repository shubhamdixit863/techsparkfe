"use client";

import CourseCard from "./CourseCard";
import { useRef } from "react";

const courses = [
  {
    id: 1,
    name: "MERN Stack Week Days",
    description:
      "Master MERN stack on weekdays, 7-8:30 PM. Accelerate your skills. Enroll for a dynamic, flexible learning experience. Transform your tech journey!",
      duration:"8 Month",
      seat:20
  },
  { id: 2, name: "MERN Stack Weekend", description: "Embark on a transformative weekend learning adventure with our MERN stack development course. Dive into immersive sessions every Saturday and Sunday from 8:00 PM - 10:00 PM. Enroll now for quality learning with flexibility" ,
  duration:"7 Month",
  seat:30
},
{ id: 2, name: "MERN Stack Weekend", description: "Embark on a transformative weekend learning adventure with our MERN stack development course. Dive into immersive sessions every Saturday and Sunday from 8:00 PM - 10:00 PM. Enroll now for quality learning with flexibility" ,
duration:"7 Month",
seat:30
},
{ id: 2, name: "MERN Stack Weekend", description: "Embark on a transformative weekend learning adventure with our MERN stack development course. Dive into immersive sessions every Saturday and Sunday from 8:00 PM - 10:00 PM. Enroll now for quality learning with flexibility" ,
duration:"7 Month",
seat:30
},
{ id: 2, name: "MERN Stack Weekend", description: "Embark on a transformative weekend learning adventure with our MERN stack development course. Dive into immersive sessions every Saturday and Sunday from 8:00 PM - 10:00 PM. Enroll now for quality learning with flexibility" ,
duration:"7 Month",
seat:30
},
  
];

const CoursesScrollArea = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" }); // Adjusted for smaller screens
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" }); // Adjusted for smaller screens
    }
  };
  return (
    <div className="flex flex-col items-center my-10">
      <div
        className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
        ref={scrollContainerRef}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={scrollLeft}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
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
        <button
          onClick={scrollRight}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
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
    </div>
  );
};

export default CoursesScrollArea;
