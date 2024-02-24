// src/components/CourseInfoCards.js
const CourseInfoCards = () => {
    return (
        <div className="flex flex-col items-center my-10">
        <h2 className="text-xl font-semibold text-[#2f80ed] mb-4">YOUR PATH FORWARD</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 p-4">
            {/* Card 1 */}
            <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-5">
                    <h3 className="text-lg text-blue-600 font-semibold">Java & MERN Full Stack</h3>
                    <h4 className="mt-2 font-bold">Pay after Placement</h4>
                    <p className="text-sm text-gray-600 mt-2">Top performers in our PAP selection process pay us only after we get them a Job!</p>
                    <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
                        <li>Solve Assignments</li>
                        <li>Coding Test</li>
                        <li>Interview</li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-4">
                    <button className="text-blue-600 hover:underline">Brochure</button>
                    <button className="float-right bg-blue-600 text-white rounded-full px-4 py-2">Learn More</button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-5">
                    <h3 className="text-lg text-purple-600 font-semibold">Data Analytics</h3>
                    <h4 className="mt-2 font-bold">Semi - Pay after Placement</h4>
                    <p className="text-sm text-gray-600 mt-2">Pay a minimal Tuition fees in monthly installments & pay the remaining fee after placement only if we get you placed.</p>
                    <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
                        <li>Give Eligibility Test</li>
                        <li>Talk to Our Counsellor to Buy Course</li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-4">
                    <button className="text-blue-600 hover:underline">Brochure</button>
                    <button className="float-right bg-purple-600 text-white rounded-full px-4 py-2">Learn More</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CourseInfoCards;
