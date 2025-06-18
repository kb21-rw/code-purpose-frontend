import ImageSlider from "@/components/ImageSlider";
import Hero from "../components/Hero";
import TextBlock from "../components/TextBlock";
import ImageCard from "../components/ImageCard";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <TextBlock />
        <ImageSlider />
        <ImageCard />
      </div>
    </>
  );
}
