// src/components/Banner.js
import Image from 'next/image';
import FormComponent from './FormComponent';

const Banner = () => {
    return (
        <div className="flex flex-wrap items-center justify-between bg-white p-5 md:p-10 h-screen">
            {/* Left side with image and text */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <Image src="/banner.jpg" alt="Banner Image" width={"600"} height={200} className="rounded-lg" />
                <p className="mt-4 text-[#4f4f4f] max-w-md">
                    This is your banner text. It can be something inspirational or informative related to your service or product.
                </p>
            </div>

            {/* Right side with form */}
           <FormComponent/>
        </div>
    );
};

export default Banner;
