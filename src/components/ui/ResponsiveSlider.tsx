// "use client";

// import { useRef } from "react";
// import { ImageSliderItem } from "@/types/HomePage";
// import Card from "../ImageSlider/Card";
// import Marquee from "react-fast-marquee";
// import Image from "next/image";

// const ResponsiveSlider = ({
//   images,
//   threshold,
// }: {
//   images: ImageSliderItem[];
//   threshold: number;
// }) => {
//   const shouldMarquee = images.length > threshold;
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;
//     const scrollAmount = direction === "left" ? -300 : 300;
//     scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   };

//   return (
//     <div className="relative">
//       {shouldMarquee ? (
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto no-scrollbar h-36 items-end gap-8 scroll-smooth px-12"
//         >
//           <button
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
//             onClick={() => scroll("left")}
//             aria-label="Scroll Left"
//           >
//             <Image src="/Left.svg" alt="arrows" fill className="w-6 h-6" />
//           </button>
//           <Marquee pauseOnHover loop={0}>
//             {images.map((image: ImageSliderItem, idx: number) => (
//               <Card key={idx} {...image} />
//             ))}
//           </Marquee>
//           <button
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
//             onClick={() => scroll("right")}
//             aria-label="Scroll Right"
//           >
//             <Image src="/Right.svg" alt="arrows" fill className="w-6 h-6" />
//           </button>
//         </div>
//       ) : (
//         <>
//           {images.map((image: ImageSliderItem, idx: number) => (
//             <Card key={idx} {...image} />
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default ResponsiveSlider;
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
