import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  mainImageHeight = 500,
  mainImageWidth = 900,
  sideImageHeight = 450,
  sideImageWidth = 288,
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
  peekSize = 32,
  backgroundColor = "bg-gray-100"
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  return (
    <div className={`relative w-full overflow-hidden ${backgroundColor} ${className}`}>
      <div className="relative max-w-[2000px] mx-auto">
        <div className="relative flex items-center justify-center px-4" 
             style={{ height: `${mainImageHeight + 100}px` }}>
          {/* Previous Image */}
          <div 
            className="absolute -left-4 transition-all duration-500 ease-in-out transform"
            style={{
              width: `${sideImageWidth}px`,
              height: `${sideImageHeight}px`,
              opacity: isTransitioning ? 0 : sideImageOpacity / 100,
              transform: isTransitioning ? 
                'translateX(-100%)' : 
                `translateX(${peekSize}px)`
            }}
          >
            <img
              src={items[(currentIndex - 1 + items.length) % items.length].image}
              alt={items[(currentIndex - 1 + items.length) % items.length].title}
              className={`rounded-lg object-cover w-full h-full shadow-lg ${imageClassName}`}
            />
          </div>

          {/* Main Image */}
          <div 
            className="relative mx-auto overflow-hidden rounded-lg shadow-xl z-10"
            style={{
              width: `${mainImageWidth}px`,
              height: `${mainImageHeight}px`
            }}
          >
            <div 
              className="relative w-full h-full transition-transform duration-500"
              style={{
                transform: isTransitioning ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <img
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                className={`object-cover w-full h-full ${imageClassName}`}
              />
              <div className="absolute inset-0 border-4 border-blue-500 rounded-lg"></div>
            </div>
          </div>

          {/* Next Image */}
          <div 
            className="absolute -right-4 transition-all duration-500 ease-in-out transform"
            style={{
              width: `${sideImageWidth}px`,
              height: `${sideImageHeight}px`,
              opacity: isTransitioning ? 0 : sideImageOpacity / 100,
              transform: isTransitioning ? 
                'translateX(100%)' : 
                `translateX(-${peekSize}px)`
            }}
          >
            <img
              src={items[(currentIndex + 1) % items.length].image}
              alt={items[(currentIndex + 1) % items.length].title}
              className={`rounded-lg object-cover w-full h-full shadow-lg ${imageClassName}`}
            />
          </div>

          {/* Navigation Buttons */}
          {showArrows && (
            <>
              <button 
                onClick={handlePrev} 
                className={`absolute left-8 z-20 p-4 bg-white/90 rounded-full hover:bg-white 
                  transition-colors disabled:opacity-50 shadow-lg ${navigationClassName}`}
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNext} 
                className={`absolute right-8 z-20 p-4 bg-white/90 rounded-full hover:bg-white 
                  transition-colors disabled:opacity-50 shadow-lg ${navigationClassName}`}
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Text Content */}
        {showText && (
          <div className="text-center mt-6">
            <h2 className={`text-2xl font-semibold ${titleClassName}`}>
              {items[currentIndex].title}
            </h2>
            <p className={`text-gray-600 mt-2 ${descriptionClassName}`}>
              {items[currentIndex].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;