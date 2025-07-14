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
    <div className="  text-base xl:text-2xl font-normal leading-5 xl:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children }) => (
            <h1 className="text-2xl lg:text-3xl font-medium">{children}</h1>
          ),

          paragraph: ({ children }) => {
            return (
              <div
                className={`${
                  isHero && "text-white"
                } text-2xl  lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal`}
              >
                {children}
              </div>
            );
          },

          list: ({ children }) => (
            <ul className={`ml-6 text-left text-secondary `}>{children}</ul>
          ),

          "list-item": ({ children }) => <li className="my-2">{children}</li>,

          link: ({ children, url }) => (
            <Link
              key={"children?.props?.id"}
              href={url}
              className="text-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </Link>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
