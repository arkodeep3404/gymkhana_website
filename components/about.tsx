'use client'

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from 'lucide-react'

const events = [
  { src: "/1st_event.png", alt: "Event 1", width: 425, height: 455 },
  { src: "/2nd_event.png", alt: "Event 2", width: 425, height: 450 },
  { src: "/3rd_event.png", alt: "Event 3", width: 425, height: 334 },
];

const FeaturedEvents = () => {
  return (
    <div className="mt-20 mx-auto px-52">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="flex flex-col items-center md:items-start p-4">
          <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
          <p className="mb-8 text-center md:text-left">
            Discover exciting events and initiatives that showcase the excellence and innovation happening at our campuses across the country.
          </p>
          <div className="w-full pt-7 hidden md:block">
            <Image src="/1st_event.png" alt="Event 1" width={425} height={455} className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden col-span-3 mb-8">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {events.map((event, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={event.src}
                      alt={event.alt}
                      width={event.width}
                      height={event.height}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#0740C6] hover:bg-[#0636B1] text-white rounded-full" />
            <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#0740C6] hover:bg-[#0636B1] text-white rounded-full" />
          </Carousel>
        </div>

        {/* Second Column */}
        <div className="hidden md:flex justify-center md:justify-start p-4">
          <div className="w-full">
            <Image src="/2nd_event.png" alt="Event 2" width={425} height={450} className="w-full max-h-400px rounded-lg" />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center md:items-start p-4">
          <div className="w-full hidden md:block">
            <Image src="/3rd_event.png" alt="Event 3" width={425} height={334} className="w-full h-auto rounded-lg" />
          </div>
          <p className="lg:pt-10 text-center md:text-left">
            From academic achievements to sustainability drives, explore how colleges are shaping the future with impactful projects and collaborations.
          </p>
          <Button className="mt-4 bg-[#0740C6] hover:bg-[#0636B1] text-white rounded-full">
            Explore events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;