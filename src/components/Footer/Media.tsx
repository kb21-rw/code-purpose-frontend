import { SocialMedia } from "@/types/Global";
import Image from "next/image";
import Link from "next/link";

const Media = ({ url, image }: SocialMedia) => {
  const { url: imageUrl, alternativeText } = image;
  return (
    <Link href={url} target={"_blank"} rel="noopener noreferrer">
      <div className="relative w-10 h-10">
        <Image
          src={imageUrl}
          alt={alternativeText + "image"}
          fill
          sizes="100%"
          className="cursor-pointer  object-contain"
        />
      </div>
    </Link>
  );
};

export default Media;
