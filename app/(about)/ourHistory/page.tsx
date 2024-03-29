import { PageTitle } from "@/components/utils/page-title";
import partnerBg from "@/public/images/partners_pic.svg";
import partnerLogo from "@/public/images/partners_logo.svg";
import crossImg from "@/public/images/cross.svg";
import pastor2 from "@/public/images/pastor2.svg";
import pastor3 from "@/public/images/pastor3.svg";

import Image from "next/image";

import Partner from "@/components/partner";
import Logo from "@/components/ui/logo";
type PartnersData = {
  name: string;
  imageUrl: string;
  logo: string;
  link: string;
};
var partnersList: PartnersData[] = [
  {
    name: "firstPartner",
    imageUrl: partnerBg,
    logo: partnerLogo,
    link: "1",
  },
  {
    name: "firstPartner",
    imageUrl: partnerBg,
    logo: partnerLogo,
    link: "1",
  },
  {
    name: "firstPartner",
    imageUrl: partnerBg,
    logo: partnerLogo,
    link: "1",
  },
  {
    name: "firstPartner",
    imageUrl: partnerBg,
    logo: partnerLogo,
    link: "1",
  },
  {
    name: "firstPartner",
    imageUrl: partnerBg,
    logo: partnerLogo,
    link: "1",
  },
];
export default function OurHistory() {
  return (
    <section className="pt-20 md:pt-20 ">
      <div className="bg-white pl-[8%] pb-20 ">
        <div className="m-auto w-[80%] pt-10 ">
          <PageTitle title="Our History"></PageTitle>
          <div>
            <Image
              className="md:max-w-none rounded py-8"
              src={crossImg}
              alt="Thrinity Fellowship"
              // width={130}
            />
          </div>

          <div>
            <p className=" font-raleway font-normal text-2xl leading-7 text-black">
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
          <div className=" flex justify-between items-center h-[530px] my-20">
            <Image
              className="md:max-w-none rounded  self-stretch h-full object-cover"
              src={pastor3}
              alt="Thrinity Fellowship"
            />
            <Image
              className="md:max-w-none rounded object-scale-down"
              src={pastor2}
              alt="Thrinity Fellowship"
              // width={130}
            />
            <Image
              className="md:max-w-none rounded  self-stretch h-full object-cover"
              src={pastor3}
              alt="Thrinity Fellowship"
            />
            <Image
              className="md:max-w-none rounded "
              src={pastor2}
              alt="Thrinity Fellowship"
              // width={130}
            />
            <Image
              className="md:max-w-none rounded  self-stretch h-full object-cover"
              src={pastor3}
              alt="Thrinity Fellowship"
            />
          </div>

          {/* <div className="flex flex-col justify-around gap-16 py-16 w-full items-stretch  px-0">
            {partnersList.map((value, index) => (
              <Partner
                name={value.name}
                imageUrl={value.imageUrl}
                logo={value.logo}
              ></Partner>
            ))}
          </div> */}
        </div>
        <hr className=" bg-[#002937] h-[2px] w-[95%] mx-10" />
        <div className="m-auto w-[80%] pt-10 text-left">
          <div className="flex items-center my-10">
            <Logo
              className=" object-cover"
              type="dark"
              size="big"
              height="350"
              width="350"
            ></Logo>
          </div>
          <div>
            <p className=" font-raleway font-normal text-2xl leading-7 text-black">
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
          <div className="flex flex-col justify-between items-stretch gap-10 py-16 w-full  px-0">
            <div
              className=" w-full h-48 relative overflow-hidden bg-cover bg-no-repeat bg-center "
              style={{ backgroundImage: "Url('/images/staff1.svg')" }}
            ></div>
            <div
              className=" w-full h-48 relative overflow-hidden bg-cover bg-no-repeat bg-center "
              style={{ backgroundImage: "Url('/images/pastor.svg')" }}
            ></div>
            <div
              className=" w-full h-48 relative overflow-hidden bg-cover bg-no-repeat bg-center "
              style={{ backgroundImage: "Url('/images/home_bg.svg')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
