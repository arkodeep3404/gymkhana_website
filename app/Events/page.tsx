"use client";
import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
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

export const awards = [
  {
    title: "Green Campus Award",
    description: "MHRD, FICCI",
    image: "/2024_1.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    description: "AIU",
    image: "/2024_2.png",
  },
  {
    title: "Excellence in Higher Education Award",
    description: "India Today Group",
    image: "/2024_3.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    description: "NCCFI",
    image: "/2024_4.png",
  },
];

const awards2023 = [
  {
    title: "Green Campus Award",
    description: "MoEFCC",
    image: "/2023_1.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    description: "AIU",
    image: "/2023_2.png",
  },
  {
    title: "Excellence in Higher Education Award",
    description: "India Today Group",
    image: "/2023_3.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    description: "FICCI",
    image: "/2023_4.png",
  },
];

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

      <div className="flex justify-center py-10">
        <Carousel items={events} />
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-5 mx-10">2024 Awards</h2>
        <ExpandableCardDemo awards={awards} />
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-5 mx-10">2023 Awards</h2>
        <ExpandableCardDemo awards={awards2023} />
      </div>

      <Footer />
    </div>
  );
};

export default Events;