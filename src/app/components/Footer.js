// import leftSectionContent from "../constant/footerText";
// font awsome
import '@fortawesome/fontawesome-free/css/all.css'
import { leftSectionContent } from '../constant/footerText';
// src/components/Footer.js
const Footer = () => {

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto py-8 px-4 md:flex md:justify-between">
                {/* Left Section*/}
                <div className="md:w-1/2 md:mb-0 mb-4">
                    <h3 className="text-lg font-semibold mb-2">YOUR PATH FORWARD</h3>
                    <p className="text-sm">
                    {leftSectionContent.trim()}
                    </p>
                    <button className="bg-[#2f80ed] text-white font-medium rounded-lg text-sm px-4 py-2 mt-4">Download Brochure</button>
                </div>

                 {/* Center Section (Links) */}
                <div className="md:w-1/4 md:mb-0 mb-4 ms-6">
                    <h3 className="text-lg font-semibold mb-2">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm">Blog</a></li>
                        <li><a href="#" className="text-sm">About Us</a></li>
                    </ul>
                </div>

                {/* Right Section (Contact & Social Media) */}
                <div className="md:w-1/4">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm mb-2">Email: info@example.com</p>
                    <p className="text-sm mb-2 hover:text-blue-500 hover:underline">Phone: +91 70035 06971</p>
                    <p className="text-sm  hover:text-blue-500 hover:underline">Phone: +91 98966 53821</p>
                    {/* Social Media Links */}
                    <div className="flex mt-4 justify-start space-x-5">
                        <a href="#" className="text-white hover:text-blue-500 font-bold"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
