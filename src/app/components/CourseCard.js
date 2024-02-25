

// src/components/CourseCard.js
const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-4">
            <div className="p-3">
                <span className="inline-block bg-purple-200 text-purple-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">Software</span>
                <h2 className="mt-3 font-bold text-xl text-black">{course.name}</h2>
                <p className="mt-2 text-gray-600 text-sm">{course.description}</p>
                
                <div className="mt-2">
                    <div className="flex items-center text-sm text-gray-600">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span className="ml-2">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="ml-2">Seats Left: {course.seat}</span>
                    </div>
                </div>
                
                <div className="mt-6">
                    <a href="#" className="text-blue-500 text-sm">+ Curriculum</a>
                </div>

                <div className="mt-4">
                    <span className="text-teal-600 text-md font-semibold">Placement</span>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                        <li>Pay after Placement Option</li>
                        <li>Dedicated Learning Coach</li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 p-4 flex justify-between items-center">
                <a href="#" className="text-blue-600 hover:text-blue-500 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Brochure
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full">Learn More</a>
            </div>
        </div>
    );
};

export default CourseCard;
