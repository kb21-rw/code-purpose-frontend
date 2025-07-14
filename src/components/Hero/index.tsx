import { HeroSection } from "@/types/HomePage";
import Image from "next/image";
import RichText from "../ui/RichText";

const Homepage = ({ title, body, backgroundImage }: HeroSection) => {
  return (
    <>
      <section
        id="home"
        className="relative h-[60vh] w-full border-b-1 border-primary "
      >
        <Image
          src={backgroundImage.url}
          alt={backgroundImage.alternativeText || "Hero"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute container inset-0 flex flex-col items-start gap-11 justify-center mt-40">
          <h1 className="text-5xl md:text-7xl font-extrabold lg:text-9xl text-white px-4 w-full">
            {title}
          </h1>
          <div className="px-4 w-full md:w-4/5 lg:w-3/5">
            <RichText content={body} isHero={true} />
          </div>
          {/* <p className="text-2xl  text-white px-4 w-full md:w-4/5 lg:w-1/2  lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
            We partner with social impact actors to develop <br />
            <span className="bg-primary">
              digital solutions that make the world a better place.
            </span>
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Homepage;
