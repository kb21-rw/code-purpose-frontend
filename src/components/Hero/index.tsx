import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="relative h-[50vh] w-full border-b-1 border-primary">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute container inset-0 flex flex-col items-start gap-11 justify-center bg-black/40">
          <h1 className="text-5xl md:text-7xl font-extrabold lg:text-9xl text-white px-4 w-full">
            CodePurpose
          </h1>
          <p className="text-2xl  text-white px-4 w-full md:w-4/5 lg:w-1/2  lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
            We partner with social impact actors to develop{" "}
            <span className="bg-primary">
              digital solutions that make the world a better place.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
