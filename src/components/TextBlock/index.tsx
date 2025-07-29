import { Header } from "@/types/HomePage";
import React from "react";
import RichText from "../ui/RichText";

const TextBlock = ({ title, body }: Header) => {
  const [firstWord, ...rest] = title.split(" ");
  const textBody = body && body[0].children[0].text !== "";
  return (
    <div className="flex flex-col gap-10 md:gap-15 pt-20 ">
      <h1 className="text-5xl md:text-7xl font-semibold leading-11 p-0 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      {textBody && (
        <div className="text-xl md:text-2xl lg:text-3xl font-normal leading-7.5 lg:leading-11 tracking-normal">
          <RichText content={body} />
        </div>
      )}
    </div>
  );
};

export default TextBlock;
