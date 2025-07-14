import Hero from "@/components/Hero";
import ImageContent from "@/components/ImageContent";
import ImageSlider from "@/components/ImageSlider";
import TextBlock from "@/components/TextBlock";
import { Section } from "@/types/HomePage";

const ComponentParser = ({ blocks }: { blocks: Section[] }) => {
  return (
    <>
      {blocks?.map((item: Section & { id?: number }, index: number) => {
        const key = `${item.id + item.__component}-${index}`;
        switch (item.__component) {
          case "block.hero-section":
            return <Hero key={key} {...item} />;
          case "block.text-block-section":
            return (
              <div className="container">
                <TextBlock key={key} {...item} />
              </div>
            );
          case "block.image-slider-section":
            return (
              <div className="container">
                <ImageSlider key={key} {...item} />
              </div>
            );
          case "block.image-content-section":
            return (
              <div className="container">
                <ImageContent key={key} {...item} />
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default ComponentParser;
