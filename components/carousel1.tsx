'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselItem {
  title: string
  description: string
  image: string
}

interface CarouselProps {
  items: CarouselItem[]
  itemsPerPage: number
  title?: string
}

export default function Carousel({ items, itemsPerPage, title }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerPage : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - itemsPerPage ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, items.length, itemsPerPage])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {title && <h2 className="text-2xl font-bold mb-5">{title}</h2>}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-300 ease-in-out`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex-none w-[${100 / itemsPerPage}%] px-2`}
              >
                <div className="bg-white shadow-lg rounded-lg p-4 h-full flex flex-col">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
          onClick={handleNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}