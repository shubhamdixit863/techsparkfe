// src/components/CourseInfoCards.js
import Link from "next/link";
const CourseInfoCards = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-xl font-semibold text-[#2f80ed] mb-4">
        YOUR PATH FORWARD
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 p-4">
        {/* Card 1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-5">
              <h3 className="text-xl text-blue-600 font-semibold mb-2">
                Java & MERN Full Stack
              </h3>
              <h4 className="text-lg font-bold mb-2">Pay after Placement</h4>
              <p className="text-sm text-gray-600 mb-4">
                Top performers in our PAP selection process pay us only after we
                get them a Job!
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Solve Assignments</li>
                <li>Coding Test</li>
                <li>Interview</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <button className="text-blue-600 hover:underline">
                Brochure
              </button>
              <button className="bg-blue-600 text-white rounded-full px-4 py-2">
                <Link href="/course">Learn More</Link>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-5">
              <h3 className="text-xl text-purple-600 font-semibold mb-2">
                Data Analytics
              </h3>
              <h4 className="text-lg font-bold mb-2">
                Semi - Pay after Placement
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Pay a minimal Tuition fees in monthly installments & pay the
                remaining fee after placement only if we get you placed.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Give Eligibility Test</li>
                <li>Talk to Our Counsellor to Buy Course</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 flex justify-between items-center">
              <button className="text-purple-600 hover:underline">
                Brochure
              </button>

              <button className="bg-blue-600 text-white rounded-full px-4 py-2">
                <Link href="/course">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCards;
