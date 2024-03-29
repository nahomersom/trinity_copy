// pages/about/ourPartners/[Id].tsx

import { PageTitle } from "@/components/utils/page-title";
import Partner from "@/components/partner";
import { PartnersType, getPartnerById } from "@/app/api/partners";
import { useEffect, useState } from "react";

type Props = {
  params: { Id: string };
};

export default function OurPartners({ params }: Props) {
  const [partnerInfo, setPartnerInfo] = useState<PartnersType>({
    id: 0,
    name: "",
    image: { alt: undefined, url: "" },
    logo: { alt: undefined, url: "" },
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPartnerById(+params.Id);
        setPartnerInfo(data ?? partnerInfo);
      } catch (error) {
        console.error("Error fetching partner info:", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {};
  }, [params.Id]);

  return (
    <section className="pt-20 md:pt-20">
      <div className="bg-white pl-[8%] pb-20">
        <div className="m-auto w-3/4 pt-10">
          <PageTitle title={partnerInfo.name} />

          <div className="flex flex-col justify-around gap-16 pb-10 w-full items-stretch px-0">
            <Partner
              name={partnerInfo.name}
              image={partnerInfo.image}
              logo={partnerInfo.logo}
            />
          </div>
          <div>
            <p className="font-raleway font-normal text-2xl leading-7 text-justify text-black">
              {partnerInfo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
