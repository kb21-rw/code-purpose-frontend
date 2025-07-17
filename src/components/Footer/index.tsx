import RichText from "../ui/RichText";
import Media from "./Media";
import { type Footer } from "@/types/Global";

const Footer = ({ Title, hash_tag, email, copyright, socialMedia }: Footer) => {
  const [firstWord, ...rest] = Title.split(" ");
  return (
    <section
      id={hash_tag}
      className="container pt-15 md:pt-30 flex flex-col justify-start items-start"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      <div className="flex flex-col justify-start  gap-x-18 gap-y-8 md:gap-y-11 py-10 md:py-18 flex-wrap">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-medium">
          Find us on :
        </h1>
        <div className="flex flex-col gap-8 md:gap-11">
          <div className="flex gap-10 items-center justify-start">
            {socialMedia.map((el) => (
              <Media key={el.id} {...el} />
            ))}
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
            {email && <RichText content={email} />}
          </div>
        </div>
      </div>

      <hr className="border-1 border-black/50 opacity-40 w-full" />
      {copyright && (
        <div className="py-4 w-full">
          {copyright && (
            <div className="text-center text-lg md:text-xl font-medium">
              <RichText content={copyright} />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Footer;
