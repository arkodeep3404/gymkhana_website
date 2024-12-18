'use client';

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';

const events = [
  { src: "/1st_event.png", alt: "Event 1", width: 425, height: 455 },
  { src: "/2nd_event.png", alt: "Event 2", width: 425, height: 450 },
  { src: "/3rd_event.png", alt: "Event 3", width: 425, height: 334 },
];

const Featured = () => {
  return (
    <div className="mt-10 md:mt-20 px-4 sm:px-6 md:px-12 lg:px-52">
      <div className="flex flex-col items-center justify-center text-center min-h-[50vh] p-4">
        {/* Featured Event Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Featured Events
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Discover exciting events and initiatives that showcase the excellence 
          and innovation happening at our campuses across the country.
        </p>
      </div>

      {/* Event Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Desktop-Only First Column */}
        <div className="hidden md:block w-full">
          <Image
            src="/1st_event.png"
            alt="Event 1"
            width={425}
            height={455}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>

        {/* Mobile and Tablet Carousel */}
        <div className="md:hidden col-span-3">
          <Carousel className="w-full max-w-xs sm:max-w-md mx-auto">
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem key={index} className="flex justify-center flex-col items-center">
                  <div className="p-1 w-full">
                    <Image
                      src={event.src}
                      alt={event.alt}
                      width={event.width}
                      height={event.height}
                      className="w-full h-auto object-cover rounded-lg"
                      priority
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden sm:flex absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#0740C6] hover:bg-[#0636B1] text-white rounded-full" />
            <CarouselPrevious className="hidden sm:flex absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#0740C6] hover:bg-[#0636B1] text-white rounded-full" />
          </Carousel>
        </div>

        {/* Desktop-Only Second Column */}
        <div className="hidden md:flex justify-center md:justify-start">
          <Image
            src="/2nd_event.png"
            alt="Event 2"
            width={425}
            height={450}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>

        {/* Desktop-Only Third Column */}
        <div className="hidden md:flex flex-col items-start text-left">
          <Image
            src="/3rd_event.png"
            alt="Event 3"
            width={425}
            height={334}
            className="w-full h-auto rounded-lg object-cover mb-4"
            priority
          />
        </div>
      </div>

      {/* Additional Paragraph */}
      <div className="text-center mt-6 mb-6">
        <p className="text-lg md:text-xl">
          From academic achievements to sustainability drives, explore how 
          colleges are shaping the future with impactful projects and collaborations.
        </p>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-6">
        <a href="/Events">
        <Button className="bg-[#0740C6] hover:bg-[#0636B1] text-white rounded-full">
          Explore events <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        </a>
      </div>
    </div>
  );
};

export default Featured;
