import Image from "next/image";
import React from "react";

const FeaturedEvents = () => {
  return (
    <div className="mt-20 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
          <p className="mb-8">
            Discover exciting events and initiatives that showcase the
            excellence and innovation happening at our campuses across the
            country.
          </p>

          <Image src="/1st_event.png" alt="Event 1" width={425} height={455} />
        </div>
        <div className="m-5">
          <Image src="/2nd_event.png" alt="Event 2" width={425} height={500} />
        </div>
        <div className="p-4">
          <Image src="/3rd_event.png" alt="Event 3" width={425} height={334} />
          <p className="py-5">
            From academic achievements to sustainability drives, explore how
            colleges are shaping the future with impactful projects and
            collaborations.
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
