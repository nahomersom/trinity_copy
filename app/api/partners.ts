import { throws } from "assert";
import { fetcher } from "./api";
import { Router } from "next/router";
import { getTokenFromLocalStorage } from "./auth";
import { ImageType } from "./helper";

export type PartnersType = {
  id: number;
  name: string;
  image: ImageType;
  logo: ImageType;
  description?: string;
};

export const getPartnersList = () => {
  var partners: PartnersType[] = [];
  console.log("!!!!!!!!!!!!",`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/partners?populate=*`)
//   http://localhost:1337/api/partners?populate=*

  return fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/partners?populate=*`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((d: any) => {
    console.log("```````````dd`````````````");
    console.log(d.data);
    var data = d.data;

    data?.map((p: any) => {
      partners.push({
        id: p.id,
        name: p.attributes.name,
        image: {
          url: p.attributes.image.data.attributes.url,
          alt: p.attributes.image.data.alternativeText,
        },
        logo: {
          url: p.attributes.logo.data.attributes.url,
          alt: p.attributes.logo.data.alternativeText,
        },
      });
    });
    console.log("00000000000000000000000000000000000000");
    console.log(partners);
    return partners;
  })
};

export const getPartnerById = (id: number) => {
  var partner: PartnersType;

  return fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/partners/${id}?populate=*`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((d: any) => {
    console.log("```````````dd`````````````");
    console.log(d.data);

    partner = {
      id: d.data.id,
      name: d.data.attributes.name,
      description :d.data.attributes.description,
      image: {
        url: d.data.attributes.image.data.attributes.url,
        alt: d.data.attributes.image.data.alternativeText,
      },
      logo: {
        url: d.data.attributes.logo.data.attributes.url,
        alt: d.data.attributes.logo.data.alternativeText,
      },
    };
    return partner;
  }).catch(error =>{
    console.log("error" , error)
  });
};
