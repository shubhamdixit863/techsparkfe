"use client";
import React, { useState } from "react";

const FAQAccordion = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question:
        "Am I eligible for this course if I am from a non-technical background?",
      answer:
        "Yes! All college students, graduates, and working professionals who are willing to put in the effort to break into the field of coding or data analytics, regardless of their degree, graduation percentage, or branch, are eligible for our courses.",
    },
    {
      id: 2,
      question: "I am a college student but not in my final year. Can I still join the course?",
      answer: "Yes, you can join our courses even if you are not in your final year of college. Our courses are designed for working professionals as well as students. You get lifetime access to course content, so you can learn at your own pace along with college academics. Nearing completion, you can use our placement services to find opportunities and secure a job. Many students join us in the second or third year to get an early start.",
    },
    {
      id: 3,
      question: "Can I enroll in Techspark's courses without any coding experience?",
      answer:
        "Absolutely! Our courses are specifically designed to accommodate learners with no prior coding experience. By attending all the classes and following our carefully crafted curriculum, you'll be guided step-by-step to master the art of coding",
    },
    {
        id: 4,
        question: "Does Techspark provide interview preparation support?",
        answer:
          "Absolutely! At Techspark, we offer comprehensive interview preparation assistance. Our dedicated placement team will guide you in crafting a compelling resume, optimizing your LinkedIn profile, and conducting unlimited mock interviews to help you ace your job interviews.",
      },
      {
        id: 5,
        question: "When does the placement process begin and what is the procedure?",
        answer:
          "The placement process at Techspark commences after 5 months of your enrollment in the course. Once you have acquired the necessary skills and completed prior modules, you can start applying to companies that align with your eligibility and skillset",
      },
      {
        id: 6,
        question: "What is pay after placement mode of enrollment?",
        answer:
          "In pay after placement mode, the tuition fees for the course are covered by Techspark. The student pays the remaining fees after getting a job through Techspark's placement services",
      },
    
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-6">
      <div className="">
        <h2 className="text-center text-xl mt-3">HAVE ANY DOUBTS?</h2>
        <div className="flex justify-center items-center flex-col">
      <h1
        className="text-center text-xl my-3"
        style={{
          padding: '10px 20px',
          fontSize: '24px',
        //   border: 'none',
          backgroundImage: 'url("image/stroke23.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: 'white', 
          fontWeight:"bold",
          cursor: 'pointer',
        //   mixBlendMode:"color"
        borderRadius:"10px"
        }}
      >
        FAQs
      </h1>
    </div>
    <h2 className="text-center text-gray-300 mb-3">Got a Question ? We are here to Answer!!</h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="mb-2 text-black md:w-3/4 mx-auto rounded-md sm:my-1">
          <div
            className="flex justify-between items-center bg-white p-3 cursor-pointer rounded-md"
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-lg font-semibold">{faq.question}</p>
            <span>{activeIndex === index ? "▼" : "▲"}</span>
          </div>
          {activeIndex === index && (
            <div className="bg-white p-3 text-black rounded-md relative mt-1 mx-auto">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
