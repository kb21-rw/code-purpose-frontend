import { Image } from "./Image";
import { Link } from "./Link";

// Common types
export interface RichTextChild {
  text: string;
  type: string;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

type Button = Link;

export interface Header {
  id: number;
  title: string | null;
  body: RichTextBlock[];
}

// Section types
export interface TextBlockSection {
  __component: "block.text-block-section";
  id: number;
  title: string;
  body: RichTextBlock[];
}

export interface HeroSection {
  __component: "block.hero-section";
  id: number;
  title: string;
  body: RichTextBlock[];
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
  header: Header;
  content: ImageContentItem[];
}

export interface ImageSliderItem {
  id: number;
  image: Image[];
  link: Button;
}

export interface ImageSliderSection {
  __component: "block.image-slider-section";
  id: number;
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
