import Image from "next/image";
import React from "react";

const FeaturedEvents = () => {
  return (
    <div className="mt-20 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* First Column */}
  <div className="flex flex-col items-center md:items-start p-4">
    <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
    <p className="mb-8 text-center md:text-left">
      Discover exciting events and initiatives that showcase the excellence and innovation happening at our campuses across the country.
    </p>
    <div className="w-full pt-7">
      <Image src="/1st_event.png" alt="Event 1" width={425} height={455} className="w-full h-auto rounded-lg" />
    </div>
  </div>

  {/* Second Column */}
  <div className="flex justify-center  md:justify-start p-4">
    <div className="w-full">
      <Image src="/2nd_event.png" alt="Event 2" width={425} height={450} className="w-full max-h-400px rounded-lg" />
    </div>
  </div>

  {/* Third Column */}
  <div className="flex flex-col items-center md:items-start p-4">
    <div className="w-full">
      <Image src="/3rd_event.png" alt="Event 3" width={425} height={334} className="w-full h-auto rounded-lg" />
    </div>
    <p className="pt-10 text-center md:text-left">
      From academic achievements to sustainability drives, explore how colleges are shaping the future with impactful projects and collaborations.
    </p>
    <button className="mt-4 px-4 py-2 bg-[#0740C6] text-white rounded-full">
      Explore events →
    </button>
  </div>
</div>

    </div>
  );
};

export default FeaturedEvents;
