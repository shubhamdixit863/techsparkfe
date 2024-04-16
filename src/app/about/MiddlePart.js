import React, { useState } from "react";

const MiddlePart = () => {
  const [text, setText] = useState([
    {
      text_1:
        "Entering the professional world as beginners demands a confidence and skills boost to attain our goals. As fresh graduates, our value may not immediately stand out to employers. TechSpark steps in to guide and support you in your post-graduation journey into the Development field. Whether you're inclined towards Web development, Data Analytics, or Coding, our courses are tailored to benefit enthusiasts like you.",
    },
  ]);
  return (
   
    <div className="bg-slate-100 text-black flex pt-20 middle">
      <div className="flex-1 text-justify md:ms-20 mt-4 about_text">{text[0].text_1}</div>
      <div className="flex-1">
        <img className="text-center md:float-right md:me-20 border-2 border-current ring-inherit" src="image/bachelor.png" alt=""  style={{height:"300px", width:"400px"}}/>
      </div>
    </div>
  );
};

export default MiddlePart;
