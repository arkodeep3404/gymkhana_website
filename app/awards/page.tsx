"use client";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";
// Carousel Component
const events = [
  {
    title: "Excellence in Higher Education",
    description:
      "From athletics to cultural fests, it empowers students to explore their passions beyond academics.",
    image: "/higher-edu.png", // Update with the actual image path
  },
  {
    title: "Another Event",
    description: "Description for another event.",
    image: "/award1.png", // Add additional events as needed
  },
  {
    title: "Another Event",
    description: "Description for another event.",
    image: "/award2.png", // Add additional events as needed
  },
];

const awards = [
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/1.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/2.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/3.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/4.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/5.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/6.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/7.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/8.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/11.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/12.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/13.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/14.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/15.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/16.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/10.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/9.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/21.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/22.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/23.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/24.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/25.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/26.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/29.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/28.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/31.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/32.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/28.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/34.png",
  },
  {
    title: "Green Campus Award",
    organization: "MoEFCC",
    image: "/awards/35.png",
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
    image: "/awards/36.png",
  },
  {
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
    image: "/awards/37.png",
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
    image: "/awards/38.png",
  },
];
function AwardsGridCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(awards.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Explore others</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous awards"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Next awards"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-4 grid-rows-2 gap-6">
                {awards
                  .slice(
                    pageIndex * itemsPerPage,
                    (pageIndex + 1) * itemsPerPage
                  )
                  .map((award, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="relative w-full pt-[100%]">
                        <Image
                          src={award.image}
                          alt={award.title}
                          fill
                          className="object-cover rounded-3xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Events Page
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row px-4 md:px-20 justify-between items-center py-10 md:py-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center md:text-left">
            Vibrant Events, Lasting Memories.
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-950 text-center md:text-left">
            From athletics to cultural fests, it empowers students to explore their passions beyond academics.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center py-10">
        <Carousel items={events} />
      </div>
      <div className="mb-20">
        <AwardsGridCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Events;
