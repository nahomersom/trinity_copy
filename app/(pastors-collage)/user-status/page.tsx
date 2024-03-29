"use client";

import { getGradeList } from "@/app/api/grade";
import { useEffect, useState } from "react";

export default function UserStatus() {
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [gradeList, setGradeList] = useState<any>(null);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      var userName = localStorage.getItem("userName");
      var userImage = localStorage.getItem("userProfileUrl");
      setUserImage(userImage || "");
      setUserName(userName || "");
    }
  }, []);

  useEffect(() => {
    getGradeList()?.then((res) => {
      if (res) {
        // Filter grades based on studentId
        const filteredGrades = res.filter((grade: any) => {
          return grade.attributes.studentId === localStorage.getItem('id');
        });
        setGradeList(filteredGrades);
      }
    });
  }, []);
  

  return (
    <section className="pt-20 md:pt-20">
      <div className="bg-white pl-[8%] pb-20">
        <div className="m-auto w-[80%] pt-24">
          <div className="flex gap-6 items-start">
            <img
              src={userImage}
              className="w-28 h-28 rounded-full border border-black"
              alt="User Profile"
            />
            <div className="max-h-1/1 pb-2 flex flex-col gap-3 justify-start h-1/1 w-1/1">
              <div className="text-[36px] text-[#002937] font-raleway font-bold leading-10">
                {userName}
              </div>
              <div className="text-xl text-[#002937] font-raleway font-bold leading-6">
                007/23
              </div>
              <div className="flex justify-start gap-2 items-center text-center">
                <div className="h-4 bg-[#002937] w-[45%] border-2 border-[#002937] rounded-xl">
                  <div className="h-full bg-white w-[70%] rounded-xl"></div>
                </div>
                <p className="text-base text-black font-raleway font-bold leading-5">
                  70% complete
                </p>
              </div>
            </div>
          </div>
          <div className="max-h-[300px] mt-16 mx-4 overflow-y-auto">
            <table className="text-black text-start w-full">
              <thead>
                <tr className="p-10 border-b-2 border-[#002937]">
                  <th className="pb-2 text-start text-xl text-[#002937] font-raleway font-bold leading-6">
                    Course Title
                  </th>
                  <th className="pb-2 text-start text-xl text-[#002937] font-raleway font-bold leading-6">
                    Exam
                  </th>
                  <th className="pb-2 text-start text-xl text-[#002937] font-raleway font-bold leading-6">
                    Paper 25%
                  </th>
                  <th className="pb-2 text-start text-xl text-[#002937] font-raleway font-bold leading-6">
                    Paper 50%
                  </th>
                  <th className="pb-2 text-start text-xl text-[#002937] font-raleway font-bold leading-6">
                    Final grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {gradeList &&
                  gradeList.map((grade: any, index: number) => (
                    <tr key={index} className="p-10 border-b-[1px] border-[#002937]">
                      <td className="py-3 text-xl text-[#002937] font-raleway font-normal leading-6">
                        {grade.attributes.CourseId.data.attributes.name}
                      </td>
                      <td className="py-3 text-xl text-[#002937] font-raleway font-normal leading-6">
                        {grade.attributes.exam25}
                      </td>
                      <td className="py-3 text-xl text-[#002937] font-raleway font-normal leading-6">
                        {grade.attributes.paper25}
                      </td>
                      <td className="py-3 text-xl text-[#002937] font-raleway font-normal leading-6">
                        {grade.attributes.paper50}
                      </td>
                      <td className="py-3 text-xl text-[#002937] font-raleway font-normal leading-6">
                        {grade.attributes.Grade}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );

}
