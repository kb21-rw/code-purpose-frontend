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
          <h1 className="text-3xl md:text-4xl font-extrabold lg:text-9xl text-white px-4 w-full md:w-4/5 lg:w-1/2 xl:w-2/5">
            CodePurpose
          </h1>
          <p className=" md:text-base  text-white px-4 w-full md:w-4/5 lg:w-1/2  lg:text-3xl font-normal">
            We partner with social impact actors to develop <br />
            <span className="bg-primary">
              digital solutions that make the world a better place.
            </span>
          </p>
        </div>
      </div>
      <hr className="border-1 border-primary w-full" />
    </>
  );
};

export default Homepage;
