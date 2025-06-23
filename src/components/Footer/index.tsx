import Media from "./Media";

const socialmedia = [
  {
    id: 1,
    link: {
      href: "https://www.linkedin.com/company/code-purpose-digital/",
      isExternal: true,
    },
    image: {
      url: "images/linkedin.svg",
      alternativeText: "linkedin",
    },
  },
  {
    id: 2,
    link: {
      href: "https://twitter.com/CodePurpose",
      isExternal: true,
    },
    image: {
      url: "images/x.svg",
      alternativeText: "twitter",
    },
  },
  {
    id: 3,
    link: {
      href: "https://www.instagram.com/codepurpose/",
      isExternal: true,
    },
    image: {
      url: "images/instagram.svg",
      alternativeText: "instagram",
    },
  },
];
const email = "contact@code-purpose.digital";
const copyright = "© CodePurpose 2023";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Footer = () => {
  const [firstWord, ...rest] = "Contact Us".split(" ");
  return (
    <section
      id="contact"
      className="container pt-30 flex flex-col justify-start items-start"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-11 tracking-normal">
        <span className="bg-primary inline-block leading-none px-1">
          {firstWord}
        </span>{" "}
        {rest.join(" ")}
      </h1>
      <div className="flex flex-col justify-start  gap-x-18 gap-y-11 py-18 flex-wrap">
        <h1 className="text-2xl lg:text-3xl  font-medium">Find us on :</h1>
        <div className="flex flex-col gap-11">
          <div className="flex gap-10 items-center justify-start">
            {socialmedia.map((el) => (
              <Media key={el.id} {...el} />
            ))}
          </div>
          {email && (
            <p className="text-lg  font-medium lg:text-3xl">
              Or reach out to{" "}
              <a
                href={`mailto:${email}`}
                target="_blank"
                className="hover:text-primary"
              >
                {email}
              </a>
            </p>
          )}
        </div>
      </div>

      <hr className="border-1 border-black/50 opacity-40 w-full" />
      {copyright && (
        <div className="py-4 w-full">
          <p className="text-center  text-lg md:text-xl font-medium">
            &copy; {new Date().getFullYear()} <strong>The Gym,</strong> All
            rights reserved
          </p>
        </div>
      )}
    </section>
  );
};

export default Footer;
