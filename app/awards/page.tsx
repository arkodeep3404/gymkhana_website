"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import Footer from "@/components/footer";
// Carousel Component
const Carousel = () => {
  const events = [
    {
      title: "Saraswati Puja",
      description: "From athletics to cultural fests, it empowers students to explore their passions beyond academics.",
      image: "/sarswatipuja.png", // Update with the actual image path
    },
    {
      title: "Another Event",
      description: "Description for another event.",
      image: "", // Add additional events as needed
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={events[currentIndex].image}
          alt={events[currentIndex].title}
          width={600}
          height={400}
          className="object-cover w-full h-auto"
        />
        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">{events[currentIndex].title}</h2>
        <p className="text-gray-600">{events[currentIndex].description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
const awards = [
    {
      title: "Green Campus Award",
      description: "MHRD, FICCI",
      image: "/2024_1.png", // Replace with actual image path
    },
    {
      title: "Best Innovation in Campus Infrastructure",
      description: "AIU",
      image: "/2024_2.png", // Replace with actual image path
    },
    {
      title: "Excellence in Higher Education Award",
      description: "India Today Group",
      image: "/2024_3.png", // Replace with actual image path
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      description: "NCCFI",
      image: "/2024_4.png", // Replace with actual image path
    },
    // Add more awards as needed
  ];
  
  const AwardsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards.length - 4 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === awards.length - 4 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="mx-10">
        <h2 className="text-2xl font-bold mb-5">2024</h2>
        <div className="relative flex items-center">
          <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <ChevronLeft />
          </button>
  
          <div className="overflow-hidden w-full">
  <div
    className="grid grid-cols-4 gap-4 transition-transform duration-300"
    style={{ transform: `translateX(-${currentIndex * 25}%)` }}
  >
    {awards.map((award, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-2 text-center">
        <Image
          src={award.image}
          alt={award.title}
          width={200}
          height={150}
          className="object-cover w-full  rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-2">{award.title}</h3>
        <p className="text-gray-600 text-sm">{award.description}</p>
      </div>
    ))}
  </div>
</div>
          <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  };
  const awards2023 = [
    {
        title: "Green Campus Award",
        description: "MoEFCC",
        image: "/2023_1.png", // Replace with the actual image path for 2023
    },
    {
        title: "Best Innovation in Campus Infrastructure",
        description: "AIU",
        image: "/2023_2.png", // Replace with the actual image path for 2023
    },
    {
        title: "Excellence in Higher Education Award",
        description: "India Today Group",
        image: "/2023_3.png", // Replace with the actual image path for 2023
    },
    {
        title: "Best College for Industry-Academia Collaboration",
        description: "FICCI",
        image: "/2023_4.png", // Replace with the actual image path for 2023
    },
    // Add more awards as needed
];


// Events Page
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ml-20 justify-between items-center py-10">
        <div className="md:flex-1 flex justify-center md:justify-start">
          <h1 className="text-5xl font-bold mb-2">
            Vibrant Events,
            <br className="hidden md:inline" />
            Lasting Memories.
          </h1>
        </div>
        <div className="md:flex-1 flex flex-col justify-evenly md:items-start">
          <p className="text-sm text-gray-600 text-center md:text-left">
            From athletics to cultural fests, it empowers students
            <br className="hidden md:inline" />
            to explore their passions beyond academics.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center py-10">
        <Carousel />
      </div>
      <div className="mb-20"><AwardsCarousel /></div>
     
      <Footer/>
    </div>
  );
};

export default Events;
