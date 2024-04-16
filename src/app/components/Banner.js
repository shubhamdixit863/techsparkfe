// src/components/Banner.js
import Image from 'next/image';
import FormComponent from './FormComponent';
import { bannerText } from '../constant/footerText';

const Banner = () => {
    return (
       
        <div className="flex flex-wrap items-center justify-between  bg-white p-5 md:p-10 h-screen banner">
        {/* Left side with image and text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <Image src="/banner.jpg" alt="Banner Image" width={400} height={250} className="rounded-lg  md:block mx-auto" />
    
            <p className="mt-4 text-[#4f4f4f] max-w-md md:hidden">
                {bannerText.trim()}
            </p>
        </div>
        {/* Right side with form */}
        <FormComponent />
    </div>
    
    );
};

export default Banner;
