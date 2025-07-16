import ResponsiveSlider from "../ui/ResponsiveSlider";
import { ImageSliderSection } from "@/types/HomePage";
import RichText from "../ui/RichText";

const ImageSlider = ({ header, images }: ImageSliderSection) => {
  const [firstWord, ...rest] = header.title.split(" ");
  return (
    <section id="partners" className="flex flex-col gap-14 pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      {header.body && <RichText content={header.body} />}
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
