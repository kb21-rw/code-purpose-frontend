import Image from "next/image";
import RichText from "../ui/RichText";
import { ImageContentItem } from "@/types/HomePage";

const Card = ({ title, body, image }: ImageContentItem) => {
  const { url, name } = image;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  h-full gap-5 xl:gap-10 px-6 md:px-12 pb-6 md:pb-12 pt-3 min-h-100">
      <Image src={url} alt={name + "icon"} width={800} height={800} />
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold leading-none tracking-normal">
          {title}
        </h1>
        {body && (
          <div className="text-2xl leading-normal tracking-normal">
            <RichText content={body} />
          </div>
        )}
        <button className="bg-primary py-3 font-semibold shadow-[0px_4px_4px_0px_#00000040] border-t border-t-black text-xl px-10 w-fit rounded-full">
          visit
        </button>
      </div>
    </div>
  );
};

export default Card;
