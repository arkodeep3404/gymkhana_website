"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import Footer from "@/components/footer";
// Carousel Component
import Carousel from "@/components/carousel";

import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";

const events = [
  {
    title: "Saraswati Puja",
    description: "From athletics to cultural fests, it empowers students to explore their passions beyond academics.",
    image: "/sarswatipuja.png",
  },
  {
    title: "Another Event",
    description: "Description for another event.",
    image: "/1st_event.png",
  },
  {
    title: " Event",
    description: "Description for another event.",
    image: "/3rd_event.png",
  },
];

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
      <h2 className="text-2xl font-bold mb-5">2023</h2>
      <div className="relative flex items-center" style={{ gap: "50px" }}>

        <button onClick={handlePrev} className="p-2 bg-red-200 rounded-full hover:bg-gray-300">
          <ChevronLeft />
        </button>


        {awards.map((award, index) => (
          <div key={index}>
            <ExpandableCardDemo
              // title={award.title}
              // description={award.description}
              // image={award.image}
            />
          </div>
        ))}


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

const AwardsCarousel2023 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards2023.length - 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === awards2023.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mx-10">
      <h2 className="text-2xl font-bold mb-5">2023</h2>
      <div className="relative flex items-center" style={{ gap: "50px" }}>

        <button onClick={handlePrev} className="p-2 bg-red-200 rounded-full hover:bg-gray-300">
          <ChevronLeft />
        </button>


        {awards.map((award, index) => (
          <div key={index}>
            <ExpandableCardDemo
              // title={award.title}
              // description={award.description}
              // image={award.image}
            />
          </div>
        ))}


        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronRight />
        </button>
      </div>

    </div>
  );
};

// Events Page
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ml-20 justify-between items-center py-20">
        <div className="md:flex-1 flex justify-center md:justify-start">
          <h1 className="text-5xl font-bold mb-2">
            Vibrant Events,
            Lasting Memories.
          </h1>
        </div>
        <div className="md:flex-1 flex flex-col justify-evenly md:items-start">
          <p className="text-lg text-gray-950 text-center md:text-left">
            From athletics to cultural fests, it empowers students
            <br className="hidden md:inline" />
            to explore their passions beyond academics.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center py-10">
        <Carousel items={events} />
      </div>
      <div className="mb-20"><AwardsCarousel /></div>
      <div className="mb-20"><AwardsCarousel2023 /></div>
      <Footer />
    </div>
  );
};

export default Events;
