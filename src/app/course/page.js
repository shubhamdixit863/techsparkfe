import FormComponent from "../components/FormComponent";

// src/pages/CoursesPage.js
const CoursesPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Section 1: Image with Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image Section */}
                <div className="order-2 md:order-1">
                    <img src="https://inzint.com/wp-content/uploads/2023/02/Features-of-Mern-stack-development-services-You-Should-Know-1.png" alt="MERN Stack" className="w-full h-auto object-cover" />
                </div>
                {/* Form Section */}
                <div className="order-1 md:order-2">
                    <FormComponent/>
                </div>
            </div>

            {/* Section 2: Course Details */}
            <div className="mt-8">
                <h1 className="text-2xl font-bold text-[#2f80ed] mb-4">About Course</h1>
                <p className="text-gray-700">

   
<h2 className="text-l font-bold text-[#2f80ed] mb-4">Mastering the MERN Stack: Build Full-Stack Web Applications</h2>

Are you ready to dive into the world of modern web development? Our MERN stack course is designed to equip you with the skills and knowledge needed to build powerful and dynamic web applications from scratch.

The MERN stack, comprised of MongoDB, Express.js, React, and Node.js, is a popular choice for building full-stack applications due to its flexibility, scalability, and efficiency. In this comprehensive course, you'll learn how to leverage the strengths of each component to create robust and feature-rich web applications.

<div>
  <h2 class="text-2xl font-bold text-[#2f80ed] mb-4">What You'll Learn:</h2>
  <ul class="list-disc list-inside text-lg text-gray-700">
    <li><strong>MongoDB:</strong> Understand the fundamentals of NoSQL databases and learn how to design and manage MongoDB databases for your applications.</li>
    <li><strong>Express.js:</strong> Master the Express.js framework and learn how to build RESTful APIs and handle server-side logic and routing.</li>
    <li><strong>React:</strong> Dive deep into React, the popular JavaScript library for building user interfaces, and learn how to create dynamic and interactive front-end components.</li>
    <li><strong>Node.js:</strong> Explore the ins and outs of Node.js, a powerful JavaScript runtime environment, and learn how to build scalable and efficient server-side applications.</li>
  </ul>
</div>

<div>
  <h2 class="text-2xl font-bold text-[#2f80ed] mb-4">Course Highlights:</h2>
  <ul class="list-disc list-inside text-lg text-gray-700">
    <li>Hands-on projects: Apply your learning to real-world projects and build a portfolio of full-stack web applications.</li>
    <li>Expert instruction: Learn from industry professionals with years of experience in full-stack development.</li>
    <li>Career readiness: Gain the skills and confidence needed to pursue careers as full-stack developers, software engineers, or web application developers.</li>
  </ul>
</div>

<p class="text-lg text-gray-700">Whether you're a beginner looking to start your journey in web development or an experienced developer seeking to expand your skill set, our MERN stack course offers a comprehensive and immersive learning experience to help you achieve your goals. Join us and embark on your path to becoming a proficient MERN stack developer today!</p>


                </p>
            </div>

            {/* Section 3: Roadmap */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#2f80ed] mb-4">Roadmap</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Data Structures and Algorithms</li>
                </ul>
            </div>
        </div>
    );
};

export default CoursesPage;
