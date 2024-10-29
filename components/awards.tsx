import React from "react";
import Image from "next/image";
import award1 from "@/public/award1.png";
import award2 from "@/public/award2.png";
import award3 from "@/public/award3.png";
import award4 from "@/public/award4.png";

const Awards = () => {
  return (
    <div className="mt-20 mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">
          Celebrating Our Journey of Excellence and Impact
        </h1>
        <p className="mb-8 text-2xl">
          Awards received from various organizations and events
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4">
          <Image
            src={award1}
            alt="Event 1"
            className="w-full h-auto object-cover"
            width={309}
            height={309}
          />

          <h2 className="text-2xl font-bold mb-4 mt-4">Green Campus Award</h2>
          <p className="mb-8">MoEFCC</p>
        </div>
        <div className="p-4">
          <Image
            src={award2}
            alt="Event 1"
            className="w-full h-auto object-cover"
            width={309}
            height={309}
          />

          <h2 className="text-2xl font-bold mb-4 mt-4">
            Best Innovation in Campus Infrastructure
          </h2>
          <p className="mb-8">AIU</p>
        </div>
        <div className="p-4">
          <Image
            src={award3}
            alt="Event 1"
            className="w-full h-auto object-cover"
            width={309}
            height={309}
          />

          <h2 className="text-2xl font-bold mb-4 mt-4">
            Excellence in Higher Education Award
          </h2>
          <p className="mb-8">India Today Group</p>
        </div>
        <div className="p-4">
          <Image
            src={award4}
            alt="Event 1"
            className="w-full h-auto object-cover"
            width={309}
            height={309}
          />

          <h2 className="text-2xl font-bold mb-4 mt-4">
            Best College for Industry-Academia Collaboration
          </h2>
          <p className="mb-8">FICCI</p>
        </div>
      </div>
      <div className="p-20 flex flex-col items-center justify-center">
        <button className="mt-4 px-4 py-2 bg-[#0740C6] text-white rounded-full">
          View More →
        </button>
      </div>
    </div>
  );
};

export default Awards;
