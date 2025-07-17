import Hero from "@/components/Hero";
import ImageContent from "@/components/ImageContent";
import ImageSlider from "@/components/ImageSlider";
import TextBlock from "@/components/TextBlock";
import { Section } from "@/types/HomePage";

const ComponentParser = ({ sections }: { sections: Section[] }) => {
  return (
    <>
      {sections?.map((item: Section & { id?: number }, index: number) => {
        const key = `${item.id}-${item.__component}-${index}`;

        switch (item.__component) {
          case "block.hero-section":
            return <Hero key={key} {...item} />;

          case "block.text-block-section":
            return (
              <div className="container" id={item.hash_tag} key={key}>
                <TextBlock {...item} />
              </div>
            );

          case "block.image-slider-section":
            return (
              <div className="container" id={item.hash_tag} key={key}>
                <ImageSlider {...item} />
              </div>
            );

          case "block.image-content-section":
            return (
              <div className="container" id={item.hash_tag} key={key}>
                <ImageContent {...item} />
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
