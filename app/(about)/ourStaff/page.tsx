export const metadata = {
  title: "OurStaff",
  description: "Page description",
};

import { PageTitle } from "@/components/utils/page-title";
import StaffDetail from "@/components/staff-detail";
import { StaffType, getStaffList } from "@/app/api/staff";
import { useRouter } from "next/router";

export default async function OurStaff() {
  let staffs: StaffType[] = [];
  
  try {
    staffs = (await getStaffList()) || []; // Ensure staffs is an array even if getStaffList returns null or undefined
  } catch (error) {
    console.error("Error fetching staff list:", error);
  }

  const st1: string = " mt-20 sm:self-center  mr-10";
  const st2: string = "sm:self-end mb-10 max-w-xl mr-5 mt-10 md:mt-0";
  const st3: string = "sm:self-end mb-10 md:mr-20 max-w-xl md:ml-10 mt-10 md:mt-0 ";
  const st4: string = "self-center md:mt-16 mb-20 mr-10";
  const st5: string = "sm:self-end mb-10 max-w-xl mr-5 mt-10 md:mt-0";

  return (
    <section className="pt-20 md:pt-20">
      <div className="bg-white pl-[8%] pb-20">
        <div className="ml-auto w-3/2 pt-10 pl-[5%] md:pl-[15%] pr-[4%]">
          <PageTitle title="Our Staff" />
          <div>
            <p className="font-raleway font-normal text-base leading-5 text-black">
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
        </div>
        <div className="mt-8 flex flex-col justify-normal items-start">
          {staffs.map((value, index) => (
            <StaffDetail
              key={index} // Add key prop for each StaffDetail component
              className={
                (index + 1) % 5 === 0
                  ? st5
                  : (index + 1) % 4 === 0
                  ? st4
                  : (index + 1) % 3 === 0
                  ? st3
                  : (index + 1) % 2 === 0
                  ? st2
                  : st1
              }
              image={value.image || null} // Ensure image is not null
              name={value.name}
              description={value.description ?? ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
