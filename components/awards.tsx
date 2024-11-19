'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from 'lucide-react'

const awards = [
  {
    image: "/award1.png",
    title: "Green Campus Award",
    organization: "MoEFCC",
  },
  {
    image: "/award2.png",
    title: "Best Innovation in Campus Infrastructure",
    organization: "AIU",
  },
  {
    image: "/award3.png",
    title: "Excellence in Higher Education Award",
    organization: "India Today Group",
  },
  {
    image: "/award4.png",
    title: "Best College for Industry-Academia Collaboration",
    organization: "FICCI",
  },
]

export default function Awards() {
  return (
    <div className="mt-56 mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center">
          Celebrating Our Journey of Excellence and Impact
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-center text-muted-foreground">
          Awards received from various organizations and events
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {awards.map((award, index) => (
          <div key={index} className="p-4">
            <Image
              src={award.image}
              alt={award.title}
              className="w-full h-auto object-cover"
              width={309}
              height={309}
            />
            <h2 className="text-2xl font-bold mb-4 mt-4">{award.title}</h2>
            <p className="mb-8 text-muted-foreground">{award.organization}</p>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {awards.map((award, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={award.image}
                    alt={award.title}
                    className="w-full h-auto object-cover rounded-2xl"
                    width={309}
                    height={309}
                  />
                  <h2 className="text-xl font-bold mb-2 mt-4">{award.title}</h2>
                  <p className="mb-4 text-muted-foreground">{award.organization}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="bg-[#0040FF] hover:bg-[#0036DB] text-white -right-4" />
          <CarouselPrevious className="bg-[#0040FF] hover:bg-[#0036DB] text-white -left-4" />
        </Carousel>
      </div>

      <div className="p-10 md:p-20 flex flex-col items-center justify-center">
        <Button className="bg-[#0040FF] hover:bg-[#0036DB] text-white rounded-full">
          View More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}