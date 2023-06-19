import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production",
};

const sanityClient = createClient(config);

export const sanityImageUrlBuilder = (source: any) =>
  imageUrlBuilder(sanityClient).image(source).url();
