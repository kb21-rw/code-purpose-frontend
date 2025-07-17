"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import Link from "next/link";

interface RichTextType {
  content: BlocksContent;
  isHero?: boolean;
}

const RichText = ({ content, isHero = false }: RichTextType) => {
  return (
    <div className="">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children }) => (
            <h1 className="text-2xl lg:text-3xl font-medium">{children}</h1>
          ),

          paragraph: ({ children }) => {
            return <div className={isHero ? "text-white" : ""}>{children}</div>;
          },

          list: ({ children }) => (
            <ul className={`ml-6 text-left text-secondary `}>{children}</ul>
          ),

          "list-item": ({ children }) => <li className="my-2">{children}</li>,

          link: ({ children, url }) => (
            <Link
              key={"children?.props?.id"}
              href={url}
              className="hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </Link>
          ),
        }}
        modifiers={{
          code: ({ children }) => (
            <span className="bg-primary px-1 rounded text-white">
              {children}
            </span>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
