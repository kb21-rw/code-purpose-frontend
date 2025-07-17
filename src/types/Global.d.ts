import { Image } from "./Image";

export interface SocialMedia {
  id: number;
  url: string;
  title: string;
  image: Image;
}

export interface Navbar {
  id: number;
  menu: Menu[];
}

export interface Menu {
  id: number;
  label: string;
  slug: string;
  link: Link;
}

export interface Footer {
  id: number;
  Title: string;
  email: RichTextBlock[];
  copyright: RichTextBlock[];
  socialMedia: SocialMedia[];
}

export interface DefaultSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: Image;
}

export interface GlobalData {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  defaultSeo: DefaultSeo;
  favicon: Image;
  navbar: Navbar;
  footer: Footer;
}

export interface GlobalResponse {
  data: GlobalData;
  meta: Record<string, unknown>;
}
