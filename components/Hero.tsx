import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-2">Where joint passion meets possibilities.</h1>
       
      </div>
      <div className="md:col-span-2 md:text-right">
      <p className="text-sm text-gray-600">From athletics to cultural fests, it empowers students to explore their passions beyond academics.</p>
        <Button variant="default" className="bg-blue-600 text-white px-4 py-2 rounded">
          Discover
        </Button>
      </div>
      <div className="md:col-span-2">
        <img 
          src="/image.png" 
          alt="Group of students in uniforms" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;