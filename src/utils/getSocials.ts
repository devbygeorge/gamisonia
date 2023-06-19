import sanityDataFetcher from "./sanityDataFetcher";
import sanityUrlBuilder from "./sanityUrlBuilder";

const socialsGroqQuery = `
    *[_type == "social" && !(_id in path("drafts.**"))] | order(lower(title) asc)
  `;

const socialsUrl = sanityUrlBuilder(socialsGroqQuery);

async function getSocials() {
  const socials = sanityDataFetcher(socialsUrl);
  return socials;
}

export default getSocials;
