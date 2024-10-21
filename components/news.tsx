export default function MediaCoverage() {
    return (
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Stories of Growth, Innovation, and Inspiration</h2>
          <p className="text-gray-500 mt-2">Stay updated with our latest media coverages</p>
        </div>
  
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
  
          {/* Left Large Item */}
          <div className="bg-blue-100 p-6 rounded-xl shadow-md relative">
            <p className="text-gray-500 text-sm">1 Jan 2024</p>
            <h3 className="text-2xl font-bold mt-2 mb-4">New Internship Program Launched to Boost Career Opportunities</h3>
            <a href="#" className="inline-block mt-4 text-blue-600 font-medium">
              Read more &rarr;
            </a>
          </div>
  
          {/* Right Smaller Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
      {/* Blue Card */}
      <div className="bg-blue-200 rounded-xl w-20 h-20 flex-shrink-0"></div>

      {/* Text and Button */}
      <div className="flex-grow">
        <p className="text-gray-500 text-sm">1 Jan 2024</p>
        <h4 className="text-xl font-bold mb-2">New Internship Program Launched to Boost Career Opportunities</h4>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full mt-2">
          Read more &rarr;
        </a>
      </div>
    </div>
  
            {/* Item 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
      {/* Blue Card */}
      <div className="bg-blue-200 rounded-lg w-20 h-20 flex-shrink-0"></div>

      {/* Text and Button */}
      <div className="flex-grow">
        <p className="text-gray-500 text-sm">1 Jan 2024</p>
        <h4 className="text-xl font-bold mb-2">New Internship Program Launched to Boost Career Opportunities</h4>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full mt-2">
          Read more &rarr;
        </a>
      </div>
    </div>
            {/* Item 3 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4">
      {/* Blue Card */}
      <div className="bg-blue-200 rounded-lg w-20 h-20 flex-shrink-0"></div>

      {/* Text and Button */}
      <div className="flex-grow">
        <p className="text-gray-500 text-sm">1 Jan 2024</p>
        <h4 className="text-xl font-bold mb-2">New Internship Program Launched to Boost Career Opportunities</h4>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full mt-2">
          Read more &rarr;
        </a>
      </div>
    </div>
          </div>
        </div>
      </section>
    );
  }
  