"use client";

import { ImageSliderItem } from "@/types/HomePage";
import Card from "../ImageSlider/Card";
import Marquee from "react-fast-marquee";

const ResponsiveSlider = ({
  images,
  threshold,
}: {
  images: ImageSliderItem[];
  threshold: number;
}) => {
  const shouldMarquee = images.length > threshold;

  return (
    <div key={threshold}>
      {shouldMarquee ? (
        <Marquee pauseOnHover loop={0}>
          {images.map((image: ImageSliderItem, idx: number) => (
            <Card key={idx} {...image} />
          ))}
        </Marquee>
      ) : (
        <div className="flex h-36 justify-start items-end flex-wrap gap-8 ">
          {images.map((image: ImageSliderItem, idx: number) => (
            <Card key={idx} {...image} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ResponsiveSlider;
