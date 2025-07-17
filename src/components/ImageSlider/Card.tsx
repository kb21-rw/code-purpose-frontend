import { type Image as CardImage } from "@/types/Image";
import { type Link as CardLink } from "@/types/Link";
import Image from "next/image";
import Link from "next/link";

const Card = ({ link, image }: { link: CardLink; image: CardImage }) => {
  return (
    <Link
      href={link?.url || "#"}
      target={link?.isExternal ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className="relative mx-6 h-32 w-48 cursor-pointer">
        <Image
          src={image.url}
          alt={image.alternativeText + image.name + "image"}
          fill
          sizes="100%"
          quality={100}
          className="object-contain"
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default Card;
