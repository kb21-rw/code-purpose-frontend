/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Card from "./Card";
import Marquee from "react-fast-marquee";

const header = {
  title: "Partners",
  description: null,
};

const images = [
  {
    link: { href: "https://www.impacthub.net/", isExternal: true },
    image: { url: "/images/image.jpg" },
  },
  {
    link: { href: "https://www.impacthub.net/", isExternal: true },
    image: { url: "/images/image 11.png" },
  },
  {
    link: { href: "https://www.impacthub.net/", isExternal: true },
    image: { url: "/images/image 10.jpg" },
  },
];

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

const ImageSlider = () => {
  const [firstWord, ...rest] = header.title.split(" ");
  return (
    <section id="partners" className="flex flex-col gap-14 pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      {header.description && (
        <div className="text-2xl lg:text-3xl leading-7.5 lg:leading-11 tracking-normal">
          <p>{header.description}</p>
        </div>
      )}
      <div className="overflow-hidden w-full py-4">
        <div className="block md:hidden">
          <ResponsiveSlider images={images} threshold={1} />
        </div>

        <div className="hidden md:block lg:hidden">
          <ResponsiveSlider images={images} threshold={3} />
        </div>

        <div className="hidden lg:block">
          <ResponsiveSlider images={images} threshold={5} />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
