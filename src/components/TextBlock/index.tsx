import React from "react";

const TextBlock = () => {
  const [firstWord, ...rest] = "How we work".split(" ");
  return (
    <div className="flex flex-col gap-25 pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 p-0 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      <p className="text-2xl lg:text-3xl leading-7.5 lg:leading-11 tracking-normal">
        In our projects, the expertise of our partners is joined by the
        experience of our software engineers, designers and product owners to
        form a hive mind that is more than the sum of its parts. <br />
        <br /> We adapt our ways of work to the requirements of our partners.
        From project-based work to long-term strategic collaborations, we have
        experience with a variety of collaboration formats.
        <br />
        <br /> To discuss what fits your needs best, reach out to
        contact@code-purpose.digital
      </p>
    </div>
  );
};

export default TextBlock;
