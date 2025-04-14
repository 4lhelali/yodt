"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Rocket, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

interface CarouselProps {
  carouselState: {
    images: CarouselImage[];
    autoplay: boolean;
    interval: number;
    showArrows: boolean;
    showDots: boolean;
  };
}

export function Carousel({ carouselState }: CarouselProps) {
  const { images, autoplay, interval, showArrows, showDots } = carouselState;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoplay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval * 1000);

      return () => clearInterval(timer);
    }
  }, [autoplay, interval, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  if (images.length === 0) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center bg-gray-100 text-2xl font-semibold text-gray-500">
        No images to display
      </div>
    );
  }

  return (
    <div className="relative m-3 h-[60vh] overflow-hidden rounded-lg bg-gray-200">
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="relative h-full w-full flex-shrink-0">
            <Image
              width={1920}
              height={1080}
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
              unoptimized
            />
            
          </div>
        ))}
      </div>
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 transform text-white transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-amber-600/50 text-white transition-colors hover:bg-amber-700/70"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-red-700"
                  : "bg-gray-400 hover:bg-red-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}