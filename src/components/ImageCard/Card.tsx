import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ title, description, image }: any) => {
  const { url, name } = image;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  h-full gap-5 xl:gap-10 px-6 md:px-12 pb-6 md:pb-12 pt-3 min-h-100">
      <Image src={url} alt={name + "icon"} width={800} height={800} />
      {description && (
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-lg lg:text-2xl leading-7.5">{description}</p>
          <button className="bg-primary py-3 font-semibold text-xl px-10 w-fit rounded-full">
            visit
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
