
import { ImageType } from "@/app/api/helper";
import Image from "next/image";


type StaffDetailType = {
    
    name: string,
    description:string,
    image : ImageType
    className? : string
  }


export default function StaffDetail(props: StaffDetailType) {
  const containerStyle = {
    width: 205,
    height: 297,
    borderRadius: "18px", // Adjust the border radius as needed
    backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL+props.image.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
   <div className={`flex flex-col sm:flex-row gap-5 max-w-4xl ${props.className}`}>

    <div style={containerStyle}>
    {/* <img
          className="w-60 h-60 "
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL+props.image.url}
          alt={props.image.alt??""}
          
        /> */}
    </div>
    <div className=" overflow-visible">
    <div className="bg-[#002937] p-3 w-fit">
        <label className=" text-xl md:text-[27px] font-raleway font-bold text-white leading-8" >{props.name}</label>
    </div>
    <div className=" pt-4 max-w-md">
        <p className="text-black text-base text-justify font-raleway font-normal leading-5">{props.description}</p>
    </div>

    </div>


   </div> 
  );
}
