import ResponsiveSlider from "../ui/ResponsiveSlider";
import { ImageSliderSection } from "@/types/HomePage";
import RichText from "../ui/RichText";

const ImageSlider = ({ header, images }: ImageSliderSection) => {
  const [firstWord, ...rest] = header.title.split(" ");
  const body = header.body && header.body[0].children[0].text !== "";
  return (
    <section className="flex flex-col  gap-10 md:gap-25 pt-20 md:pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>
        {rest.join(" ")}
      </h1>
      {body && (
        <div className="text-xl md:text-2xl lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
          <RichText content={header.body} />
        </div>
      )}
      <div className="overflow-hidden w-full py-4">
        <div className="block md:hidden">
          <ResponsiveSlider images={images} threshold={1} />
        </div>

        <div className="hidden md:block lg:hidden">
          <ResponsiveSlider images={images} threshold={3} />
        </div>

        <div className="hidden lg:block">
          <ResponsiveSlider images={images} threshold={5} />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
