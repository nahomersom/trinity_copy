"use client";

import { PageTitle } from "@/components/utils/page-title";
import StaffDetail from "@/components/staff-detail";
import searchIcon from "@/public/images/icon _search.svg";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Image from "next/image";
import LatestSermon from "@/components/latest-sermon";
import play from "@/public/images/play_icon.svg";
import { SermonType, getSermonsList } from "@/app/api/sermons";
import { useEffect, useState } from "react";
import ModalVideo from "@/components/modal-video";

var name = "Pastor Micheal Granger";
var description =
  "Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text Random text";

export default  function Sermons() {

  const [sermonList, setSermons] = useState<SermonType[]>([]);

  // var sermonList : SermonType [] = [];
 
  useEffect(() => {
    // Code here will run on the client side    process.env.NEXT_PUBLIC_STRAPI_API_URL
     getSermonsList()?.then((res) => {
    
      setSermons(res)

      console.log("screammmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
      console.log(sermonList);
   
    });

  
  }, []);

  return (
    <section className="pt-20 md:pt-20 ">
      <div className="bg-white w-1/1 pb-20 ">
        <div className="mx-auto  w-[70%] pt-10">
          <PageTitle title="Sermons"></PageTitle>
          {/* search bar for small screen */}
          <div className="flex justify-start gap-1 pl-4 mb-10 rounded-3xl border-[0.5px] md:hidden border-black">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={searchIcon}
                alt=""
              />
              <input
                className="text-base font-raleway text-black selection:border-0 font-light justify-start border-0 rounded-r-3xl bg-transparent"
                type="text"
                placeholder="Search"
              />
            </div>
            {/* --------- */}
          <div className="flex justify-between items-end w-1/1 px-1 pb-4 border-b-2 border-black">
            <div className=" text-black text-base font-raleway font-light leading-5">
              Speaker
            </div>
            <div className=" text-black  text-base font-raleway font-light leading-5">
              Scripture
            </div>
            <div className=" text-black  text-base font-raleway font-light leading-5">
              Topic
            </div>
            {/* search bar for large screen */}
            <div className=" justify-start  gap-1 pl-4 rounded-3xl border-[0.5px] border-black  hidden md:flex">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={searchIcon}
                alt=""
              />
              <input
                className="text-base font-raleway text-black selection:border-0 font-light justify-start border-0 rounded-r-3xl bg-transparent"
                type="text"
                placeholder="Search"
              />
            </div>
            {/* -------- */}
          </div>
          <div className="min-h-[300px] ">
          <div className="grid grid-cols-3 gap-3 items-center">
            {sermonList.map((value, index) => (
              <div className="pt-3 flex  flex-col items-start">
                <div className=" items-center">
                <ModalVideo   thumb={"images/pastor.svg"} thumbWidth={350} thumbHeight={300} thumbAlt={""} video={process.env.NEXT_PUBLIC_STRAPI_API_URL+value.vedioUrl} videoWidth={650} videoHeight={600}/>

                </div>
                <div className="text-base text-black font-Raleway font-semibold leading-4 p-1 pl-3">
                  {" "}
                  {value.speaker}
                  {/* Pastor Micheal Granger */}
                </div>
                <div className="text-small text-black font-raleway font-light leading-3 p-1 pl-3">
                  {/* Mark 2 : 5 - 8 */}
                  {value.article}
                </div>
                <div className="text-small text-black font-raleway font-light leading-3 p-1 pl-3">
                  {/* March 15, 2023 */}
                  {new Date(value.date).toLocaleDateString('en-US',{ year: 'numeric', month: 'long', day: 'numeric' })
                }
                </div>
              </div>
            ))}
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
