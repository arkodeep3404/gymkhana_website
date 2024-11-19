"use client";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";
import Footer from "@/components/footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// Carousel Component
import Carousel from "@/components/carousel";
interface Award {
  title: string;
  description: string;
  image: string;
  details: string;
}

const awards2023: Award[] = [
  {
    title: "IEM-UEM KOLKATA MARATHON",
    description:
      "A marathon raising awareness and celebrating resilience with over 1,500 participants.",
    image: "/events/marathon.png",
    details:
      "The IEM-UEM Kolkata Marathon 2023, a distinctive event organized by the students of the Institute of Engineering & Management, Kolkata, successfully held its sixth edition on Sunday, January 29th. Known as the Indian Warriors, these students achieved their goal of raising awareness about the new normal and aiding people in adapting to it. Over 1,500 participation slots were sold out a week in advance.Notable participants included a person running with a prosthetic leg, a lady completing the 10K run with her baby in a stroller, a 3-year-old child finishing the 5K run. The event featured three races: a half marathon, a 10K run, and a 5K run. Cash prizes were awarded to the winners, and medals were given to all finishers.",
  },
  {
    title: "IEMPACT",
    description:
      "The annual cultural fest showcasing diverse events and guest performances.",
    image: "/events/iempact-fest.png",
    details:
      "IEMPACT 2023, the annual cultural fest of IEM Kolkata, a distinctive event organized by the students of the Institute of Engineering & Management, Kolkata, successfully held on Saturday and Sunday, January 21st to 22nd. This year we have total ten events including dance, music, creative writing and many more.This year we have many prestigious guests such as Anindya Chatterjee and many more. On the day 22nd January we have TRAP as our guest performer.The event were the enthusiastic cheering from college students and volunteers and over 500 participants participated in all events. This event achieves 1 lakhs of prize pool and the last minutes of the event was very successful.",
  },
  {
    title: "INNOVACION",
    description:
      "A grand technical fest featuring robotics, coding events, and hackathons.",
    image: "/events/innovcion.png",
    details:
      "The Institute of Engineering and Management organized Innovación 2023, technical fest of IEM at IEM Management House from March 10th to 12th. The event featured notable guests such as Prof. Dr. Saikat Maitra, Mr. Sanjay Chatterjee, Mr. Harikrishna Pal, Mr. Gaurav Sharma and our very own director Prof. Dr. Satyajit Chakrabarti. March 10th was dedicated to online events, while March 11th and 12th featured both online and offline activities. Highlights included three hackathons in collaboration with Unstop, three major robotics events, and Scrapyard Wars. Innovación 2023 showcased innovative projects, grandiose robotics competitions, coding events, guest lectures, and workshops. It brought together students, professors, and industry experts, making it one of the largest Techno-Management fests in Kolkata, celebrating creativity and technical prowess across various disciplines.",
  },
  {
    title: "SMART MAKER FESTIVAL",
    description:
      "A festival celebrating innovation and technology with global participation.",
    image: "/events/smart-maker.png",
    details:
      "The SMART Maker Festival is a family-friendly event celebrating creativity, invention, and resourcefulness in innovation and technology. It brings together tech enthusiasts, engineers, artists, scientists, and crafters to showcase their hobbies, experiments, and projects. The 2023 festival, organized by SMART Society USA and Canada with IEM-UEM Group, was held on 14th and 15th January. Despite the global pandemic, it attracted participants from countries like the USA, Nepal, UK, Germany, Bangladesh, and Canada, as well as Indian universities such as IITs and NITs. It was a big success in its way.",
  },
  {
    title: "IEM MUN",
    description:
      "The ninth edition of the IEM Model United Nations, held offline after three years.",
    image: "/events/iem-mun.png",
    details:
      "Overof Engineering & Management has been a keen contributor to the Model United Nations Community. This year we are coming forth with the most awaited 9th edition of IEM-MUN to be held offline mode & in-person after 3 years of the pandemic. This shall be the first IEMMUN conference to be held in offline mode, since 2019. IEMMUN 2022 will be held from 14-16th October, 2022 at IEM Gurukul Campus, Kolkata and prove to be a wonderful opportunity to exhibit knowledge.",
  },
  {
    title: "SPORTS DAY",
    description:
      "An energetic day celebrating sportsmanship and student camaraderie.",
    image: "/events/sports-day.png",
    details:
      "Sports Day is the perfect occasion to celebrate physical fitness and sportsmanship. Every year, IEM students unite for a march past, salute the national flag, and compete in events like the 100-meter dash, 4x100 relay, long jump, shot put, and tug of war. The day recognizes the hard work of all participants, culminating in award distributions for top performers. Beyond competition, Sports Day is a fun-filled event that showcases school spirit, strengthens friendships, and builds camaraderie among students.",
  },
  {
    title: "FAREWELL",
    description: "A nostalgic evening bidding goodbye to graduating seniors.",
    image: "/events/farewell.png",
    details:
      "Our college's 3rd and 2nd-year students organized a memorable farewell party for their cherished seniors. Reflecting on their journey, it’s inspiring to see how these talented individuals began college four years ago with high hopes and have since achieved significant milestones. This unique batch excelled academically and actively participated in campus activities. The farewell was marked by flowers, beautifully decorated photo booths, and lights for capturing memories. Food packets were served, and retro musical and dance performances enriched the evening. Heartfelt farewell speeches highlighted the strong bond between seniors and the college, filled with admiration and humor. The evening was full of joy, laughter, and emotional moments as seniors shared their college experiences. The event underscored the enduring friendships formed, concluding on a touching note that neither distance nor time can diminish these bonds.",
  },
  {
    title: "TEACHER'S DAY",
    description:
      "A celebration honoring Dr. Sarvepalli Radhakrishnan with cultural programs.",
    image: "/events/teachers-day.png",
    details:
      "On the evening of September 5, 2023,the faculty members and students of the Institute of Engineering &Management, Kolkata honoured Dr Sarvepalli Radhakrishnan by hosting acultural event. The Director, Prof. DrSatyajit Chakrabarti, Principal Prof. Arun Kumar Bar and the Librarian,Prof. Gauri Majumder presided over acake-cutting ceremony to mark theinauguration of the event. The culturalprogramme began after college hours atroughly five o'clock, keeping lecturesuninterrupted. Thedance and music performances by the2nd and 3rd-year students to entertainour professors and other students.",
  },
  {
    title: "AGOMONI",
    description: "A cultural program celebrating the arrival of Maa Durga.",
    image: "/events/agonomi.png",
    details:
      "The word 'Agomoni' stems from 'Agomon'. More than just a word, 'Agomoni' embodies an emotion that consistently brings golden rays of sunshine into the dreary, mundane lives of Bengalis. It evokes the smell of 'kash ful', the sight of white cotton candy-like clouds drifting in the blue autumn skies, and the distant sound of Birendra Krishna Bhadra's voice on Mahalaya. In Bengali culture, 'agomon' celebrates the arrival of Maa Durga on earth, and IEM has honored this tradition every year. This year was no different, with a cultural program organized at the Science Auditorium of the Gurukul Campus under the guidance of Professor Gauri Majumder.",
  },
  {
    title: "RABINDRA JAYANTI",
    description:
      "A tribute to Rabindranath Tagore celebrating his contributions to art and literature.",
    image: "/events/rabindranth-jayanth.png",
    details:
      "Rabindranath Tagore, the first Asian Nobel laureate, was born on May 7, 1861, in Jorasanko, Kolkata. He received the Nobel Prize for his profoundly sensitive, fresh and beautiful work 'Gitanjali' or 'Song Offerings'. A true polymath, Tagore was not only a poet and writer but also a playwright, composer, philosopher, social reformer, and painter. He introduced Contextual Modernism to Indian arts, revolutionizing literature and music. As a key figure in the Bengali Renaissance, he produced an extensive body of work, including numerous paintings, hundreds of texts, and over two thousand songs. Known as the Bard of Bengal, he modernized art by rejecting rigid classical forms and embracing naturalism, fluidity of language, and colloquialism.",
  },
  {
    title: "DIVERSION",
    description:
      "An open-source event encouraging innovation and collaboration.",
    image: "/events/diversion.png",
    details:
      "DIVERSION 2023, organized by the Department of Computer Science and Engineering at the Institute of Engineering & Management, Kolkata, and the ACM-IEM Student Chapter, was an open-source event aimed at encouraging greater participation in open-source projects. Over two months, more than 500 participants contributed to 75+ projects across various domains, including Artificial Intelligence & Machine Learning, app development, and web development. The event also featured projects in hardware-related fields such as IoT and robotics.",
  },
  {
    title: "ALUMNI MEET",
    description:
      "A heartwarming reunion of alumni to celebrate their journeys post-graduation.",
    image: "/events/alumini-meet.png",
    details:
      "The Alumni Association of IEM (Institute of Engineering and Management) organized ALUMNI MEET at IEM Gurukul to reconnect with alumni and celebrate their achievements after two years of lockdown. Alumni began arriving at 6:00 p.m., were registered, and welcomed by Prof. Sanghamitra Poddar. The event featured cultural programs, award ceremonies, and a cake-cutting ceremony with Prof. Dr. Satyajit Chakrabarti. Alumni interacted with students, offering motivational talks on placements and higher studies, and shared their experiences. The evening included delicious snacks, an open-sky dining setup, and melodious singing performances. Alumni appreciated reconnecting with professors and batchmates, expressing gratitude for the memorable evening. The event concluded with a vote of thanks from faculty and students, acknowledging the support of IEM management in making Alumni Meet a grand success.",
  },
];

const events = [
  {
    title: "Saraswati Puja",
    description:
      "From athletics to cultural fests, it empowers students to explore their passions beyond academics.",
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

function AwardsCarousel2023() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awards2023.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === awards2023.length - 4 ? 0 : prevIndex + 1
    );
  };

  const openAwardDetails = (award: Award) => {
    setSelectedAward(award);
  };

  const closeAwardDetails = () => {
    setSelectedAward(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">2023 Events</h2>
        <div className="flex gap-2">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            aria-label="Previous awards"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={handleNext}
            variant="default"
            size="icon"
            aria-label="Next awards"
            className="bg-blue-500 hover:bg-blue-700"
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
            <div key={index} className="flex-none w-1/4">
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
                  <h3 className="font-medium text-sm mb-1 truncate">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    {award.description}
                  </p>
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
                className="object-cover rounded-3xl"
              />
            )}
          </div>
          <p className="text-sm font-medium mb-2">
            {selectedAward?.description}
          </p>
          <p className="text-sm text-gray-600">{selectedAward?.details}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
// Events Page
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ml-20 justify-between items-center py-20">
        <div className="md:flex-1 flex justify-center md:justify-start">
          <h1 className="text-5xl font-bold mb-2">
            Vibrant Events, Lasting Memories.
          </h1>
        </div>
        <div className="md:flex-1 pl-64  flex flex-col justify-evenly md:items-start">
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

      <div className="mb-20">
        <AwardsCarousel2023 />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
