import RichText from "../ui/RichText";
import Card from "./Card";
import { ImageContentSection } from "@/types/HomePage";

const ImageContent = ({ header, content }: ImageContentSection) => {
  const [firstWord, ...rest] = header.title.split(" ");

  return (
    <section className="flex flex-col  gap-10 md:gap-25 pt-20 md:pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      <div className="text-xl md:text-2xl lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
        {header.body && <RichText content={header.body} />}
      </div>
      <div className="grid grid-cols-1 gap-10 md:gap-20 xl:gap-40">
        {content.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    </section>
  );
};

export default ImageContent;
