import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";
import map from "@/public/images/gps.svg";
import church from "@/public/images/church_icon.svg";

export default function ContactUs() {
  return (
    <div
      className="bg-white  pt-4 pb-0 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/pattern_bg.svg')" }}
    >
      <div className="relative h-[67vh]  ">
        <Image
          className=" md:max-w-none mx-auto rounded h-full w-full md:h-full "
          src={map}
          layout="fill"
          objectFit="cover"
          alt=""
        ></Image>
        <div className=" px-2 md:px-16 py-8 max-h-1/1 w-[90%]  md:w-[36%] bg-[#002937] border-solid border-1 rounded-[40px]
          absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
            
          <Image
            className="md:max-w-none mx-auto rounded"
            src={church}
            width={40}
            alt=""
          ></Image>
          <div>
            <p className=" text-[24px] font-semibold text-center">
              Come join us
            </p>
          </div>
          <div className="grid grid-cols-9 gap-0 w-1/1 font-normal m-5 mx-auto px-5 justify-items-center p-0 ">
            <div className=" col-span-4  justify-self-center text-center">
              <p className="text-center text-[12px] ">
                Saturday Afternoon Women Bible Study 8:00 PM - 10:00 PM
              </p>
              {/* <p>Women Bible Study</p>
            <p>8:00 PM - 10:00 PM</p> */}
            </div>
            <div className="h-10 w-0 border-[0.3px] justify-self-center bg-white col-span-1"></div>
            <div className="p-0 col-span-4">
              <p className="text-center text-[12px] ">
                Saturday Afternoon Women Bible Study 8:00 PM - 10:00 PM
              </p>
            </div>
            <div className=" mt-8 col-span-4">
              <p className="text-center text-[12px] ">
                Saturday Afternoon Women Bible Study 8:00 PM - 10:00 PM
              </p>
            </div>
            <div className="h-20 w-0 mb-0 mt-5 border-[0.3px] justify-self-center bg-white col-span-1"></div>
            <div className="  mt-8  col-span-4 ">
              <p className="text-center text-[12px]">
                Saturday Afternoon Women Bible Study 8:00 PM - 10:00 PM
              </p>
            </div>
          </div>
          <div className=" mb-4">
            <p className=" text-[24px] font-semibold text-center">
              Be in the know
            </p>
          </div>
          <div className="relative w-1/1 m-auto">
            <input
              type="text"
              name=""
              id=""
              className=" h-8 w-1/1 border-white border-solid border-1 rounded-xl bg-[#002937] text-white"
            />
            <div className="bg-white flex items-center justify-center absolute right-0 -z--1 top-0 rounded-md text-[#002937] text-center h-1/1 w-[30%]">
              <p className="text-center m-auto">join</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-center py-10 text-[13px]">
        <span className=" font-normal">Designed By </span>
        <span className=" font-bold">Colorem design studio</span>
      </div>
    </div>
  );
}
