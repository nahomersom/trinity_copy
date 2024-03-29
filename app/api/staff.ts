import { fetcher } from "./api";
import { ImageType } from "./helper";

export type StaffType = {
  id: number;
  name: string;
  image: ImageType;
  description?: string;
};

export const getStaffList = () => {
  var staffs: StaffType[] = [];
  return fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/staffs?populate=*`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((d: any) => {
    var data = d.data;
    console.log("--------------------",d.data)
     data?.map((p: any) => {
    console.log("$$$$$$$$$$$$$$$$$$4",p.attributes.image)

      staffs.push( {
        id: p.id,
        name: p.attributes.name,
        description: p.attributes.description,
        image: {
          url: p.attributes.image.data?.attributes?.url ?? "",
          alt: p.attributes.image.data?.alternativeText ??"",
        },
      });
    });
    console.log("stafffffffff-----",staffs)
    return staffs;
  });
  
};
