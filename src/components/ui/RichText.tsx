"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import Link from "next/link";

interface RichTextType {
  content: BlocksContent;
}

const RichText = ({ content }: RichTextType) => {
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
              <div className="text-lg lg:text-2.1xl text-secondary font-extralight leading-7.5 tracking-1.5">
                {children}
              </div>
            );
          },

          list: ({ children }) => (
            <ul className={`ml-6 text-left text-primary `}>{children}</ul>
          ),

          "list-item": ({ children }) => <li className="my-2">{children}</li>,

          link: ({ children, url }) => (
            <Link
              key={"children?.props?.id"}
              href={url}
              className="text-primary"
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
