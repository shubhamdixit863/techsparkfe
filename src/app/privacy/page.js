"use client"
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'

const page = () => {
    const [content, setContent] = useState([
        `Privacy Policy for TechSpark`,
        ``,
        `Last Updated: 28th of Feb 2024`,
        ``,
        `Thank you for choosing TechSpark. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our services.`,
        ``,
        `Registration Fee:`,
        `Non-refundable Fee:`,
        `The registration fee paid by users is non-refundable.`,
        ``,
        `Attendance and Placement:`,
        `Attendance Requirement:`,
        ``,
        `To be eligible for pay after placement services, participants must maintain a minimum attendance of 80% during the training sessions.`,
        ``,
        `Placement Services:`,
        `Pay after placement services are contingent upon successfully completing the training program and meeting the eligibility criteria outlined by TechSpark.`,
        ``,
        `Assignments:`,
        `Assignment Requirements:`,
        ``,
        `Participants are required to achieve a minimum passing grade of 75% on all assignments to progress through the training program.`,
        ``,
        `Information Collection and Use:`,
        `Personal Information:`,
        ``,
        `We collect personal information such as name, contact details, and academic/professional background during the registration process.`,
        ``,
        `Usage Data:`,
        `We may collect information on how the services are accessed and used ("Usage Data"). This data may include information such as your computer's Internet Protocol address, browser type, browser version,`,
      ]);
  return (
   <>
   {/* <Navbar /> */}
   <div className='px-6 mx-auto py-4 bg-slate-100 text-black'>
   {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
   </div>
   </>
  )
}

export default page
