"use client";

import { useState } from "react";
import { ImageSliderItem } from "@/types/HomePage";
import Card from "../ImageSlider/Card";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ResponsiveSlider = ({
  images,
  threshold,
}: {
  images: ImageSliderItem[];
  threshold: number;
}) => {
  const shouldMarquee = images.length > threshold;
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [key, setKey] = useState(0);

  const changeDirection = (dir: "left" | "right") => {
    setDirection(dir);
    setKey((prev) => prev + 1);
  };

  if (!shouldMarquee) {
    return (
      <div className="flex h-36 justify-start items-end flex-wrap gap-8">
        {images.map((image: ImageSliderItem, idx: number) => (
          <Card key={idx} {...image} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={() => changeDirection("left")}
        aria-label="Scroll Left"
      >
        <Image src="/Left.svg" alt="left arrow" width={24} height={24} />
      </button>

      {/* Marquee */}
      <Marquee key={key} pauseOnHover speed={40} direction={direction}>
        {images.map((image: ImageSliderItem, idx: number) => (
          <Card key={idx} {...image} />
        ))}
      </Marquee>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={() => changeDirection("right")}
        aria-label="Scroll Right"
      >
        <Image src="/Right.svg" alt="right arrow" width={24} height={24} />
      </button>
    </div>
  );
};

export default ResponsiveSlider;
