import Image from "next/image";
import Logo from "./ui/logo";
import facebookIcon from "@/public/images/facebook_icon.svg";
import instaIcon from "@/public/images/instagram_icon.svg";

export default function Hero() {
  return (
    <section className="relative h-[660px] max-h-full">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform w-1/1 h-1/1 -translate-x-1/2 bottom-0 top-20 -z-1 overflow-hidden
        bg-[#002937] opacity-20
         pointer-events-none bg-cover bg-no-repeat  bg-center"
        aria-hidden="true"        
        style={{backgroundImage:"url('images/home_bg.svg')"}}
      >
      </div>

        {/* Hero content */}
        <div className="relative w-1/1 h-1/1 pt-32  md:pt-40 flex flex-col justify-center items-center">
          <div className="text-center pb-12 md:pb-16">
            <Logo size="big" />
          </div>
          <div className="h-[57px] w-[28px] self-end bg-white flex flex-col mr-16 justify-evenly rounded-md">
            <Image
              className="md:max-w-none mx-auto rounded"
              src={facebookIcon}
              alt="Thrinity Fellowship"
            />
            <Image
              className="md:max-w-none mx-auto rounded"
              src={instaIcon}
              alt="Thrinity Fellowship"
            />
          </div>
          <div className=" h-12 w-56 self-start bg-white ml-10 absolute bottom-0">

          </div>

          {/* Hero image */}
      </div>
    </section>
  );
}
