import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 mt-15 md:grid-cols-2 gap-4 p-4">
      <div className="flex justify-center py-10 md:justify-start">
        <h1 className="text-5xl font-poppins  mb-2">
          At Gymkhana, passion
          <br className="hidden md:inline" />
          meets possibilities.
        </h1>
      </div>
      <div className="flex pl-64 flex-col lg:justify-evenly md:items-start md:col-span-1">
        <p className="text-lg text-black font-poppins text-center md:text-left">
          From athletics to cultural fests, it empowers students to explore
        
          their passions beyond academics.
        </p>
        <Button
          variant="default"
          className="bg-[#0740C6] text-white  px-4 py-2 rounded-full mt-2"
        >
          Discover →
        </Button>
      </div>
      <div className="md:col-span-2 ">
        <Image
          src="/gymkhana.jpg"
          alt="Group of students in uniforms"
          className="w-full h-[75%] object-cover rounded-3xl"
          width={506}
          height={1323}
        />
      </div>
    </div>
  );
};

export default Hero;
