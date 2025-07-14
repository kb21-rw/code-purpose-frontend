/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Card from "../ImageSlider/Card";
import Marquee from "react-fast-marquee";

const ResponsiveSlider = ({
  images,
  threshold,
}: {
  images: any;
  threshold: number;
}) => {
  const shouldMarquee = images.length > threshold;

  return (
    <>
      {shouldMarquee ? (
        <Marquee pauseOnHover loop={0}>
          {images.map((icon: any, idx: number) => (
            <Card key={idx} {...icon} />
          ))}
        </Marquee>
      ) : (
        <div className="flex h-36 justify-start items-end flex-wrap gap-8 ">
          {images.map((icon: any, idx: number) => (
            <Card key={idx} {...icon} />
          ))}
        </div>
      )}
    </>
  );
};
export default ResponsiveSlider;
