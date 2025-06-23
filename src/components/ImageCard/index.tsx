import Card from "./Card";

const header = {
  title: "Projects",
  description: `We partner with social impact actors to develop digital solutions that make the world a better place.  In our projects, the expertise of our partners is joined by the experience of our software engineers, designers and product owners to form a hive mind that is more than the sum of its parts.`,
};

const Cards = [
  {
    title: "Lorem Ipsum",
    description: ` In our projects, the expertise of our partners is joined by the
        experience of our software engineers, designers and product owners to
        form a hive mind that is more than the sum of its parts.`,
    image: { url: "/images/image 3.jpg", name: "image" },
  },
  {
    title: "Lorem Ipsum",
    description: ` In our projects, the expertise of our partners is joined by the
        experience of our software engineers, designers and product owners to
        form a hive mind that is more than the sum of its parts.`,
    image: { url: "/images/image 4.jpg", name: "image" },
  },
];

const ImageCard = () => {
  const [firstWord, ...rest] = header.title.split(" ");
  return (
    <section id="projects" className="flex flex-col gap-25 pt-30">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      {header.description && (
        <div>
          <p className="text-2xl lg:text-3xl leading-7.5 lg:leading-11 tracking-normal">
            {header.description}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-10 md:gap-20 xl:gap-40">
        {Cards.map((el, index) => (
          <Card key={index} {...el} />
        ))}
      </div>
    </section>
  );
};

export default ImageCard;
