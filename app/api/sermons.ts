import { throws } from "assert";
import { fetcher } from "./api";
import { Router } from "next/router";
import { getTokenFromLocalStorage } from "./auth";

export type SermonType = {
  id: number;
  speaker: string;
  article: string;
  date: Date;
  description : string;
  vedioUrl: string;
};

export const getSermonsList =  () => {
  const jwt = getTokenFromLocalStorage();
  var sermonsList: SermonType[] = [];
  if (jwt) {
   
   return  fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sermons?populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      }
    ).then((d : any) => {
      console.log("```````````dd`````````````");
      console.log(d.data);
      var data = d.data;

     
      data?.map((sermon: any) => {
        sermonsList.push({
          id: sermon.id,
          speaker: sermon.attributes.speakerFullName,
          article: sermon.attributes.article,
          date: sermon.attributes.date,
          description: sermon.attributes.description,

          vedioUrl: sermon.attributes.video?.data.attributes.url,
        });
      });
      console.log("00000000000000000000000000000000000000");
      console.log(sermonsList);
      return sermonsList;
    });
}
return;
 
};

export const getLatestSermon = () => {
    const jwt = getTokenFromLocalStorage();
    var latestSermon : SermonType = {
        id: 0,
        speaker: "",
        article: "",
        date: new Date(),
        description: "",
        vedioUrl: ""
    }
    if (jwt) {
     
     return  fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/sermons?sort=date:desc&pagination[page]=1&pagination[pageSize]=1&populate=*`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      ).then((d : any) => {
        console.log("```````````dd`````````````");
        console.log(d.data);
        var sermon = d.data[0];

        latestSermon =  {
            id: sermon.id,
            speaker: sermon.attributes.speakerFullName,
            article: sermon.attributes.article,
            date: sermon.attributes.date,
            description: sermon.attributes.description,
            vedioUrl: sermon.attributes.video?.data.attributes.url,
          }
          return latestSermon
      });
  }
  return;
   
};
