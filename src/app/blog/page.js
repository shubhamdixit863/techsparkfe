// src/pages/BlogPage.js
const BlogPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[#2f80ed] mb-8">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Article 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png" alt="Article 1" className="w-full h-56 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-lg font-bold text-[#2f80ed] mb-2">Article Title 1</h2>
                        <p className="text-gray-600 text-sm mb-4">By Author Name | Date</p>
                        <p className="text-gray-700">Summary of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="text-[#2f80ed] font-medium mt-2 inline-block">Read More</a>
                    </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png" alt="Article 2" className="w-full h-56 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-lg font-bold text-[#2f80ed] mb-2">Article Title 2</h2>
                        <p className="text-gray-600 text-sm mb-4">By Author Name | Date</p>
                        <p className="text-gray-700">Summary of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="text-[#2f80ed] font-medium mt-2 inline-block">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
