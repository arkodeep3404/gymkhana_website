"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import Footer from "@/components/footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
// Carousel Component
import Carousel from "@/components/carousel";
interface Award {
  title: string
  description: string
  image: string
  details: string
}


const awards2023: Award[] = [
  {
    title: " IEM-UEM Kolkata Marathon ",
    description: "MoEFCC",
    image: "/events/.png",
    details: "Awarded for implementing sustainable practices and promoting environmental awareness on campus."
  },
  {
    title: "Best Innovation in Campus Infrastructure",
    description: "AIU",
    image: "/awards/2.png",
    details: "Recognized for cutting-edge facilities and innovative use of technology in campus infrastructure."
  },
  {
    title: "Excellence in Higher Education Award",
    description: "India Today Group",
    image: "/awards/3.png",
    details: "Honored for outstanding contributions to higher education and academic excellence."
  },
  {
    title: "Best College for Industry-Academia Collaboration",
    description: "FICCI",
    image: "/awards/4.png",
    details: "Acknowledged for fostering strong partnerships between industry and academia, enhancing student employability."
  },
  {
    title: "Research Excellence Award",
    description: "UGC",
    image: "/awards/5.png",
    details: "Recognized for groundbreaking research contributions across various disciplines."
  },
  {
    title: "Best Student Support Services",
    description: "MHRD",
    image: "/awards/6.png",
    details: "Awarded for providing exceptional support services to students, enhancing their overall college experience."
  },
  {
    title: "Innovation in Teaching Methodology",
    description: "AICTE",
    image: "/awards/7.png",
    details: "Honored for implementing innovative teaching methods that enhance student learning and engagement."
  },
  {
    title: "Outstanding Sports Facilities",
    description: "Sports Authority of India",
    image: "/awards/8.png",
    details: "Recognized for state-of-the-art sports facilities and promoting sports excellence among students."
  },
]



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


  

export function AwardsCarousel2023() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAward, setSelectedAward] = useState<Award | null>(null)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards2023.length - 4 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === awards2023.length - 4 ? 0 : prevIndex + 1))
  }

  const openAwardDetails = (award: Award) => {
    setSelectedAward(award)
  }

  const closeAwardDetails = () => {
    setSelectedAward(null)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">2023 Awards</h2>
        <div className="flex gap-2">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            aria-label="Previous awards"
            className=""
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleNext}
            variant="default"
            size="icon"
            aria-label="Next awards"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
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
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                onClick={() => openAwardDetails(award)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1 truncate">{award.title}</h3>
                  <p className="text-sm text-gray-600 truncate">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedAward !== null} onOpenChange={closeAwardDetails}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedAward?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video mb-4">
            {selectedAward && (
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                className="object-cover rounded-md"
              />
            )}
          </div>
          <p className="text-sm font-medium mb-2">{selectedAward?.description}</p>
          <p className="text-sm text-gray-600">{selectedAward?.details}</p>
        </DialogContent>
      </Dialog>
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
     
      <div className="mb-20">
        <AwardsCarousel2023/>
        </div>
      <Footer/>
    </div>
  );
};

export default Events;
