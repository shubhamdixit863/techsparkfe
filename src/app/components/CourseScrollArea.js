"use client";

import CourseCard from "./CourseCard";
import { useRef } from "react";

const courses = [
    { id: 1, name: 'Java Full-Stack Development Track', description: 'Master DSA, Problem Solving, Full Stack and crack top Software Development jobs' },
    { id: 2, name: 'Another Course', description: 'Description of Course 2' },
    // Add more courses as needed
];

const CoursesScrollArea = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Adjusted for smaller screens
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Adjusted for smaller screens
        }
    };

    return (
        <div className="flex flex-col items-center my-10">
            <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4" ref={scrollContainerRef}>
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            <div className="flex mt-4 space-x-2">
                <button onClick={scrollLeft} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2f80ed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={scrollRight} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2f80ed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CoursesScrollArea;
