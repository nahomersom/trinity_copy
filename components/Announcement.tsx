

type AnnouncementData = {
  title: string;
  Detail: string;
  Date: string;
  by: string;
};

export default function Announcement(props: AnnouncementData) {
  return (
    <div className="px-[5%]">
      <div className="flex justify-between">
        <div className=" pb- text-[36px] text-[#002937] font-raleway font-black leading-10">
          {props.title}
        </div>
        <div>
          <p className=" text-xs italic text-[#002937] font-raleway font-bold leading-4">
            Date {props.Date}
          </p>
          <p className=" text-xs italic text-[#002937] font-raleway font-bold leading-4">
            By {props.by}
          </p>
        </div>
      </div>
      <div>
        <p className=" text-xl text-black font-raleway font-normal leading-6">{props.Detail}</p>
      </div>
    </div>
  );
}
