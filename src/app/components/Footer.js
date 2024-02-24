// src/components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto py-8 px-4 md:flex md:justify-between">
                {/* Left Section */}
                <div className="md:mb-0 mb-4">
                    <h3 className="text-lg font-semibold mb-2">YOUR PATH FORWARD</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus mauris sed tristique.</p>
                    <button className="bg-[#2f80ed] text-white font-medium rounded-lg text-sm px-4 py-2 mt-4">Download Brochure</button>
                </div>

                {/* Center Section (Links) */}
                <div className="md:mb-0 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-sm">Blog</a></li>
                        <li><a href="#" className="text-sm">About Us</a></li>
                    </ul>
                </div>

                {/* Right Section (Contact & Social Media) */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm mb-2">Email: info@example.com</p>
                    <p className="text-sm">Phone: +1234567890</p>
                    {/* Social Media Links */}
                    <div className="flex space-x-2 mt-4">
                        <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
