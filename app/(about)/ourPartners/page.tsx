"use client";

import { PageTitle } from "@/components/utils/page-title";

import Partner from "@/components/partner";
import { usePathname, useRouter } from "next/navigation";
import { PartnersType, getPartnersList } from "@/app/api/partners";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function OurPartners() {
  const [partnersList, setPartenersList] = useState<PartnersType[]>([]);
  useEffect(() => {
    getPartnersList()
      ?.then((res) => {
        setPartenersList(res);
      })
      .catch((e) => {
        toast.error(e);
      });
  }, []);
  const currentPath = usePathname();
  return (
    <section className="pt-20 md:pt-20 ">
      <div className="bg-white pl-[8%] pb-20 ">
        <div className="m-auto w-3/4 pt-10 ">
          <PageTitle title="Our Partners"></PageTitle>
          <div>
            <p className=" font-raleway font-normal text-base leading-5 text-black">
              The significance of this office emerges from God’s heart to love
              and care for his people through his Son, the chief Shepherd.
              Christ has set the standard as the definitive Shepherd, the One
              who leads with truth and grace, justice and love. Therefore,
              pastors must possess high moral character and live lives that
              commend the gospel and serve as a model for others. Through their
              example and teaching, they lead the church in its mission to
              proclaim the gospel and extend the Lord’s compassionate heart to
              love for and care for his people.
            </p>
          </div>
          <div className="flex flex-col justify-around gap-16 py-16 w-full items-stretch  px-0">
            {partnersList.map((value, index) => (
              <Partner
              key={index}
                name={value.name}
                image={
                   value.image
                }
                logo={value.logo}
                link={currentPath + "/" + value.id}
              ></Partner>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
