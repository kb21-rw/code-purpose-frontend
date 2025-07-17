import { Image } from "./Image";
import { Link } from "./Link";
import { RichText } from "@/types/richText";

type Button = Link;

export interface Header {
  id: number;
  hash_tag: string;
  title: string;
  body: RichText[];
}

// Section types
export interface TextBlockSection {
  __component: "block.text-block-section";
  id: number;
  hash_tag: string;
  title: string;
  body: RichText[];
}

export interface HeroSection {
  __component: "block.hero-section";
  id: number;
  hash_tag: string;
  title: string;
  body: RichText[];
  backgroundImage: Image;
}

export interface ImageContentItem {
  id: number;
  title: string;
  body: RichTextBlock[];
  image: Image;
  button: Button;
}

export interface ImageContentSection {
  __component: "block.image-content-section";
  id: number;
  hash_tag: string;
  header: Header;
  content: ImageContentItem[];
}

export interface ImageSliderItem {
  id: number;
  image: Image;
  link: Button;
}

export interface ImageSliderSection {
  __component: "block.image-slider-section";
  id: number;
  hash_tag: string;
  header: Header;
  images: ImageSliderItem[];
}

// Union of all section types
export type Section =
  | TextBlockSection
  | HeroSection
  | ImageContentSection
  | ImageSliderSection;

// Main Data type
export interface HomePageData {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sections: Section[];
}
