
import { ImageType } from "@/app/api/helper";
import Image from "next/image";


type StaffDetailType = {
    
    name: string,
    description:string,
    image : ImageType
    className? : string
  }


export default function StaffDetail(props: StaffDetailType) {
  return (
   <div className={`flex flex-col sm:flex-row gap-5 max-w-4xl ${props.className}`}>
    <div className="">
    <img
          className="md:max-w-none mx-0  rounded-2xl"
          src={props.image.url}
          alt={props.image.alt??""}
        />
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
