import RichText from "../ui/RichText";
import Card from "./Card";
import { ImageContentSection } from "@/types/HomePage";

const ImageContent = ({ hash_tag, header, content }: ImageContentSection) => {
  const [firstWord, ...rest] = header.title.split(" ");
  return (
    <section id={hash_tag} className="flex flex-col gap-25 pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      {header.body && <RichText content={header.body} />}
      <div className="grid grid-cols-1 gap-10 md:gap-20 xl:gap-40">
        {content.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    </section>
  );
};

export default ImageContent;
