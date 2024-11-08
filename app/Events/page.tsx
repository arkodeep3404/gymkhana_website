"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const awards2024 = [
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
  // Add more awards to test navigation
  {
    title: "Sustainability Leadership Award",
    description: "Green University Alliance",
    image: "/2024_5.png",
  },
  {
    title: "Outstanding Research Contribution",
    description: "National Science Foundation",
    image: "/2024_6.png",
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

const AwardsSection = ({ title, awards }: { title: string; awards: any[] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - itemsPerPage));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(awards.length - itemsPerPage, prevIndex + itemsPerPage));
  };

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mx-10 mb-5">{title}</h2>
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <ExpandableCardDemo awards={awards.slice(startIndex, startIndex + itemsPerPage)} />

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={startIndex >= awards.length - itemsPerPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

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

      <AwardsSection title="2024 Awards" awards={awards2024} />
      <AwardsSection title="2023 Awards" awards={awards2023} />

      <Footer />
    </div>
  );
};

export default Events;