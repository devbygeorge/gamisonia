import sanityDataFetcher from "./sanityDataFetcher";
import sanityUrlBuilder from "./sanityUrlBuilder";

async function getProjects(locale: string) {
  const interiorGroqQuery = `
    *[_type == "project" && category == "interior"] | order(lower(name) asc) {
      "_id": _id,
      "category": category,
      "title": title.${locale},
      "image": image
    }
  `;

  const architectureGroqQuery = `
    *[_type == "project" && category == "architecture"] | order(lower(name) asc) {
      "_id": _id,
      "category": category,
      "title": title.${locale},
      "image": image
    }
  `;

  const objectGroqQuery = `
    *[_type == "project" && category == "object"] | order(lower(name) asc) {
      "_id": _id,
      "category": category,
      "title": title.${locale},
      "image": image
    }
  `;

  const interiorUrl = sanityUrlBuilder(interiorGroqQuery);
  const architectureUrl = sanityUrlBuilder(architectureGroqQuery);
  const objectUrl = sanityUrlBuilder(objectGroqQuery);

  const [interior, architecture, object] = await Promise.all([
    sanityDataFetcher(interiorUrl),
    sanityDataFetcher(architectureUrl),
    sanityDataFetcher(objectUrl),
  ]);
  return { interior, architecture, object };
}

export default getProjects;
