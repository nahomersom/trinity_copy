import Image from "next/image";
import church from "@/public/images/church_icon.svg";
import pastor from "@/public/images/pastor.svg";
import play from "@/public/images/play_icon.svg";

export default function AmNew() {
  return (
    <section className="bg-[#002937] text-white p-16 md:pl-[10%] md:pr-16 pl-4 pr-4">
      <div className="flex items-center justify-center md:justify-start gap-6 ">
        <div>
          <Image
            className="md:max-w-none mx-auto rounded"
            src={church}
            alt=""
          ></Image>
        </div>
        <div className=" self-end">
          <h1 className=" text-4xl text-start font-semibold">I'M NEW</h1>
        </div>
      </div>
      <div className="mt-12 ml-[10%] mr-[5%]">
        <div>
          <p className=" text-center font-inter font-medium text-[20px]">
            Wait for the Lord, my soul waits, and in his word I hope; 6my soul
            waits for the Lord more than watchmen for the morning, more than
            watchmen for the morning.Wait for the Lord, my soul waits, and in
            his word I hope; 6my soul waits for the Lord more than watchmen for
            the morning, more than watchmen for the morning.Wait for the Lord,
            my soul waits, and in his word I hope; 6my soul waits for the Lord
            more than watchmen for the morning, more than watchmen for the
            morning.Wait for the Lord, my soul waits, and in his word I hope.
          </p>
        </div>
        <div className=" mt-10 mb-10">
          <h3 className="text-center font-semibold text-[24px]">Message From Our Pastor</h3>
        </div>
        <div className=" relative border-solid border-1 rounded-3xl">
          <Image
          className=" md:max-w-none mx-auto rounded"
           src={pastor} alt=""></Image>
          
          <Image
         className="  md:max-w-none mx-auto rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
         width={40}

          src={play} alt=""></Image>
        </div>
      </div>
    </section>
  );
}
