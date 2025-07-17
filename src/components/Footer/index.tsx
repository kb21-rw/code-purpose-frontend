import RichText from "../ui/RichText";
import Media from "./Media";
import { type Footer } from "@/types/Global";

const Footer = ({ Title, email, copyright, socialMedia }: Footer) => {
  const [firstWord, ...rest] = Title.split(" ");
  return (
    <section
      id="contact"
      className="container pt-30 flex flex-col justify-start items-start"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      <div className="flex flex-col justify-start  gap-x-18 gap-y-11 py-18 flex-wrap">
        <h1 className="text-2xl lg:text-3xl  font-medium">Find us on :</h1>
        <div className="flex flex-col gap-11">
          <div className="flex gap-10 items-center justify-start">
            {socialMedia.map((el) => (
              <Media key={el.id} {...el} />
            ))}
          </div>
          <div className="text-2xl lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
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

// Or reach out to [contact@code-purpose.digital](contact@code-purpose.digital)
// © 2025 **The Gym**, All rights reserved
