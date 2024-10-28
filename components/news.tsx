"use client";
import { Button } from "./ui/button";
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
          <div className="bg-blue-100 p-6 rounded-xl shadow-md relative flex flex-col justify-between h-full">  
    <div>  
        <p className="text-gray-500 text-sm">1 Jan 2024</p>  
        <h3 className="text-2xl font-bold mt-2 mb-4">New Internship Program Launched to Boost Career Opportunities</h3>  
    </div>  
    <a href="#" className="mt-auto inline-block bg-blue-600 text-white py-2 px-4 rounded-full w-36 text-center">  
    Read more &rarr;  
</a>  
</div>  
          {/* Right Smaller Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-2 rounded-xl flex justify-center space-x-4">
      {/* Blue Card */}
      <div className="bg-blue-200 rounded-2xl h-30 w-40 flex-shrink-0"></div>

      {/* Text and Button */}
      <div className="flex-grow">
        <p className="text-gray-500 text-sm">1 Jan 2024</p>
        <h4 className="text-xl font-medium mb-2">New Internship Program Launched to Boost Career Opportunities</h4>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full ">
          Read more &rarr;
        </a>
      </div>
    </div>
  
            {/* Item 2 */}
            <div className="bg-white p-2 rounded-xl flex justify-center space-x-4">
      {/* Blue Card */}
      <div className="bg-blue-200 rounded-2xl h-30 w-40 flex-shrink-0"></div>

      {/* Text and Button */}
      <div className="flex-grow">
        <p className="text-gray-500 text-sm">1 Jan 2024</p>
        <h4 className="text-xl font-medium mb-2">New Internship Program Launched to Boost Career Opportunities</h4>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full ">
          Read more &rarr;
        </a>
      </div>
    </div>
            {/* Item 3 */}
            <div className="bg-white p-2 rounded-xl flex justify-center space-x-4">
      {/* Blue Card */}
      <div className="bg-blue-200 rounded-2xl h-30 w-40 flex-shrink-0"></div>

      {/* Text and Button */}
      <div className="flex-grow">
        <p className="text-gray-500 text-sm">1 Jan 2024</p>
        <h4 className="text-xl font-medium mb-2">New Internship Program Launched to Boost Career Opportunities</h4>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full ">
          Read more &rarr;
        </a>
      </div>
    </div>
          </div>
        </div>
      </section>
    );
  }
  