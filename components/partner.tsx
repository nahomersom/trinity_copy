import { ImageType } from "@/app/api/helper";
import Image from "next/image";
import Link from "next/link";

type PartnerType = {
  name: string;
  image: ImageType;
  logo: ImageType;
  link?: string;
};

export default function partner(props: PartnerType) {
  const containerStyle = {
    height : 200,

    backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL+props.image.url})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Link href={props.link ?? ""} className="relative w-full">
  

      <div id={props.name}
      //  className=" w-full bg-[#002937] opacity-1 "
       style={containerStyle}>
        {/* <img
          className="md:max-w-none rounded w-full mix-blend-screen"
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL +props.image.url}
          alt={props.image.alt}
        /> */}
      </div>
      <div className="z-1 bottom-1/2 transform translate-y-1/2 left-10 absolute">
        <img
          className="md:max-w-none bg max-w-1/1 max-h-16 w-1/1 p-20"
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL +props.logo.url}
          alt={props.logo.alt}
        />
      </div>
     
    </Link>
  );
}
