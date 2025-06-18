"use client";

import Card from "./Card";
import Marquee from "react-fast-marquee";

const header = {
  title: "Partners",
  description: `We partner with social impact actors to develop digital solutions that make the world a better place.  In our projects, the expertise of our partners is joined by the experience of our software engineers, designers and product owners to form a hive mind that is more than the sum of its parts.`,
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

const ImageSlider = () => {
  const [firstWord, ...rest] = header.title.split(" ");
  return (
    <div className="flex flex-col gap-25 mt-30">
      <h1 className="text-8xl font-semibold">
        <span className="bg-primary">{firstWord}</span> {rest.join(" ")}
      </h1>
      {header.description && (
        <div className="text-lg lg:text-3xl leading-7.5">
          <p className="text-3xl">{header.description}</p>
        </div>
      )}
      <div className="overflow-hidden w-full py-4">
        {images.length > 6 ? (
          <Marquee pauseOnHover loop={0}>
            {images.map((icon, idx) => (
              <Card key={idx} {...icon} />
            ))}
          </Marquee>
        ) : (
          <div className="flex justify-start flex-wrap gap-8">
            {images.map((icon, idx) => (
              <Card key={idx} {...icon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
