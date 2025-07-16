import { Header } from "@/types/HomePage";
import React from "react";
import RichText from "../ui/RichText";

const TextBlock = ({ hash_tag, title, body }: Header) => {
  const [firstWord, ...rest] = title.split(" ");
  return (
    <div id={hash_tag || "#"} className="flex flex-col gap-25 pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 p-0 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      <RichText content={body} />
    </div>
  );
};

export default TextBlock;
