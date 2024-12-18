import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

// Define types for carousel items and props
type CarouselItem = {
  title: string;
  description: string;
  image: string;
};

type CarouselProps = {
  items: CarouselItem[];
  mainImageHeight?: number;
  mainImageWidth?: number;
  sideImageHeight?: number;
  sideImageWidth?: number;
  showArrows?: boolean;
  showText?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  navigationClassName?: string;
  transitionDuration?: number;
  sideImageOpacity?: number;
  peekSize?: number;
  backgroundColor?: string;
};

const Carousel = ({
  items,
  mainImageHeight = 680,
  mainImageWidth = 1300,
  sideImageHeight = 500,
  sideImageWidth = 160,
  showArrows = true,
  showText = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  navigationClassName = "",
  transitionDuration = 500,
  sideImageOpacity = 60,
  peekSize = 5,
  backgroundColor = "bg-white",
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto play effect
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${backgroundColor} ${className}`}
    >
      <div className="relative max-w-[2000px] mx-auto">
        <div
          className="relative flex items-center justify-center px-4"
          
        >
          {/* Previous Image */}
          <div
            className="absolute -left-4 transition-all duration-500 ease-in-out transform hidden md:block"
            style={{
              width: `${sideImageWidth}px`,
              height: `${sideImageHeight}px`,
              opacity: isTransitioning ? 0 : sideImageOpacity / 100,
              transform: isTransitioning
                ? "translateX(-100%)"
                : `translateX(${peekSize}px) rotate(-3deg)`,
            }}
          >
            <Image
              src={items[(currentIndex - 1 + items.length) % items.length].image}
              alt={items[(currentIndex - 1 + items.length) % items.length].title}
              className={`rounded-lg object-cover w-full h-full shadow-lg ${imageClassName}`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Main Image */}
          <div
            className="relative mx-auto overflow-hidden rounded-3xl shadow-xl z-10"
            style={{
              width: '100%',
              maxWidth: `${mainImageWidth}px`,
              height: '0',
              paddingBottom: `${(mainImageHeight / mainImageWidth) * 100}%`,
            }}
          >
            <div
              className="absolute inset-0 transition-transform duration-500"
              style={{
                transform: isTransitioning ? "scale(1.05)" : "scale(1)",
              }}
            >
              <Image
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                className={`object-cover ${imageClassName}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 border-4 rounded-lg"></div>
            </div>
          </div>

          {/* Next Image */}
          <div
            className="absolute -right-4 transition-all duration-500 ease-in-out transform hidden md:block"
            style={{
              width: `${sideImageWidth}px`,
              height: `${sideImageHeight}px`,
              opacity: isTransitioning ? 0 : sideImageOpacity / 100,
              transform: isTransitioning
                ? "translateX(100%)"
                : `translateX(-${peekSize}px) rotate(3deg)`,
            }}
          >
            <Image
              src={items[(currentIndex + 1) % items.length].image}
              alt={items[(currentIndex + 1) % items.length].title}
              className={`rounded-lg object-cover w-full h-full shadow-lg ${imageClassName}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Text Content with Navigation */}
        {showText && (
          <div className="text-center pt-20 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Left Navigation Button */}
            {showArrows && (
              <button
                onClick={handlePrev}
                className={`p-2 bg-blue-500 rounded-full hover:bg-blue-600 
                    transition-colors disabled:opacity-50 shadow-lg ${navigationClassName}`}
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Title and Description */}
            <div className="w-full md:w-[450px] max-w-lg px-4 md:px-0">
              <h2 className={`text-xl md:text-2xl font-semibold ${titleClassName}`}>
                {items[currentIndex].title}
              </h2>
              <p className={`text-gray-600 mt-2 text-sm md:text-base ${descriptionClassName}`}>
                {items[currentIndex].description}
              </p>
            </div>

            {/* Right Navigation Button */}
            {showArrows && (
              <button
                onClick={handleNext}
                className={`p-2 bg-blue-500 rounded-full hover:bg-blue-600 
                    transition-colors disabled:opacity-50 shadow-lg ${navigationClassName}`}
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;

