"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import Footer from "@/components/footer";
// Carousel Component
import Carousel from "@/components/carousel";


const event2023 = [
  {
    title: "IEM-UEM Kolkata Marathon 2023",
    description: "A major marathon with over 1,500 participants."
  },
  {
    title: "IEMPACT 2023",
    description: "The annual cultural fest featuring ten diverse events."
  },
  {
    title: "Innovación 2023",
    description: "A significant technical fest showcasing robotics and hackathons."
  },
  {
    title: "SMART Maker Festival 2023",
    description: "An international event gathering tech enthusiasts and inventors."
  },
  {
    title: "IEM-MUN 2022",
    description: "The ninth edition of the Model United Nations, conducted offline."
  },
  {
    title: "Sports Day",
    description: "An annual event promoting physical fitness and sportsmanship."
  },
  {
    title: "Farewell Party",
    description: "A heartfelt farewell with cultural performances and speeches."
  },
  {
    title: "Teacher's Day Celebration",
    description: "A cultural event honoring teachers with performances."
  },
  {
    title: "Agomoni Festival",
    description: "An annual celebration marking the arrival of Maa Durga."
  },
  {
    title: "Rabindra Jayanti",
    description: "A tribute to Rabindranath Tagore with cultural performances."
  },
  {
    title: "DIVERSION 2023",
    description: "An open-source initiative encouraging contributions across domains."
  },
  {
    title: "Alumni Meet",
    description: "An event reconnecting alumni with faculty and students."
  },
  {
    title: "Ashram Cup Football Tournament 2023",
    description: "A spirited football tournament with students, faculty, and alumni."
  },
  {
    title: "Ashram Cup Cricket Tournament 2024",
    description: "A historic tournament marking gender inclusivity in sports."
  }
];




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
  {
    title: " Event",
    description: "Description for another event.",
    image: "/3rd_event.png",
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
    {
      title: "Best College for Industry-Academia Collaboration",
      description: "NCCFI",
      image: "/2024_4.png", // Replace with actual image path
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      description: "NCCFI",
      image: "/2024_4.png", // Replace with actual image path
    },
    // Add more awards as needed
  ];
  
  const AwardsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards2023.length - 4 : prevIndex - 1))
    }
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === awards2023.length - 4 ? 0 : prevIndex + 1))
    }
  
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">2024</h2>
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
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            }}
          >
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex-none w-1/4"
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-600">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  const awards2023 = [
    {
      title: "Green Campus Award",
      organization: "MoEFCC",
      image: "/2023_1.png",
    },
    {
      title: "Best Innovation in Campus Infrastructure",
      organization: "AIU",
      image: "/2023_2.png",
    },
    {
      title: "Excellence in Higher Education Award",
      organization: "India Today Group",
      image: "/2023_3.png",
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      organization: "FICCI",
      image: "/2023_4.png",
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      organization: "FICCI",
      image: "/2023_4.png",
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      organization: "FICCI",
      image: "/2023_4.png",
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      organization: "FICCI",
      image: "/2023_4.png",
    },
    {
      title: "Best College for Industry-Academia Collaboration",
      organization: "FICCI",
      image: "/2023_4.png",
    },
  ]
  
  export  function AwardsCarousel2023() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards2023.length - 4 : prevIndex - 1))
    }
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === awards2023.length - 4 ? 0 : prevIndex + 1))
    }
  
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">2023</h2>
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
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
            }}
          >
            {awards2023.map((award, index) => (
              <div
                key={index}
                className="flex-none w-1/4"
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
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
        <Carousel items={events}/>
      </div>
      <div className="mb-20"><AwardsCarousel /></div>
      <div className="mb-20"><AwardsCarousel2023/></div>
      <Footer/>
    </div>
  );
};

export default Events;
