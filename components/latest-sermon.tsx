"use client";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import Logo from "./ui/logo";
import bible from "@/public/images/bible.png";
import pastor from "@/public/images/pastor.svg";
import play from "@/public/images/play_icon.svg";
import { SermonType, getLatestSermon } from "@/app/api/sermons";
import ModalVideo from "./modal-video";

export default function LatestSermon() {

  const [latestSermon, setLatestSermon] = useState<SermonType>({  id: 0,
    speaker: "",
    article: "",
    date: new Date(),
    description: "",
    vedioUrl: ""});

 
  useEffect(() => {
     getLatestSermon()?.then((res) => {
      setLatestSermon(res)
    });

  
  }, []);

  return (
    <div
      className=" bg-white text-stone-950 p-[5%] pl-[15%] pr-[10%] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('images/pattern_bg.svg')" }}
    >
      <div className="flex justify-start gap-2 w-14">
        <div className=" ">
          <Image
            color="#002937"
            className="md:max-w-none mx-auto rounded"
            src={bible}
            alt=""
          ></Image>
        </div>
        <h1 className=" text-3xl font-semibold font-playfair-display text-[#002937]">
          LATEST SERMON
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-center gap-6 mt-10">
        {/* <div className=" relative border-solid border-1 rounded-3xl h-80 bg-black">
          <Image
            className="  md:max-w-none mx-auto rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            sizes="12px"
            src={play}
            alt=""
          ></Image> */}
        {/* </div> */}
        <div className=" items-center">
                <ModalVideo   thumb={"images/pastor.svg"} thumbWidth={450} thumbHeight={400} thumbAlt={""} video={process.env.NEXT_PUBLIC_STRAPI_API_URL+latestSermon.vedioUrl} videoWidth={650} videoHeight={600}/>

                </div>
        <div className="">
          <div>
            <h2 className=" font-semibold text-2xl">{latestSermon?.speaker}</h2>
            <h4 className=" text-xl">{new Date(latestSermon.date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' })}</h4>
          </div>
          <p className="pt-3">
            wait for the lord my soul waits and in his word I hope,my soul waits
            for the lord morethan watchman for the mornning
          </p>
        </div>
      </div>
    </div>
  );
}
